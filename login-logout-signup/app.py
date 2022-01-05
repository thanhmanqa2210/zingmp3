#!/usr/bin/env python
#-*- coding:utf-8 -*-

import tornado.httpserver
import tornado.ioloop
import tornado.web
import tornado.options
import os.path
from tornado.options import define, options
import pymongo

port = int(os.getenv('PORT', 8080))
#define("port", default=8888, help="run on the given port", type=int)

conn = pymongo.MongoClient()
db = conn.example
cursor = db.accounts 

class BaseHandler(tornado.web.RequestHandler):
    def get_current_user(self):
        return self.get_secure_cookie("user")
        
class MainHandler(BaseHandler):
    @tornado.web.authenticated
    def get(self):
        self.render('index.html')

class LoginHandler(BaseHandler):
    @tornado.gen.coroutine
    def get(self):
        incorrect = self.get_secure_cookie("incorrect")
        if incorrect and int(incorrect) > 20:
            self.write('<center>blocked</center>')
            return
        self.render('login.html')

    @tornado.gen.coroutine
    def post(self):
        incorrect = self.get_secure_cookie("incorrect")
        if incorrect and int(incorrect) > 20:
            self.write('<center>blocked</center>')
            return
        
        getusername = tornado.escape.xhtml_escape(self.get_argument("username"))
        getpassword = tornado.escape.xhtml_escape(self.get_argument("password"))
        doc = cursor.find_one({"username": getusername,
                                "password": getpassword})
        if doc:
            self.set_secure_cookie("user", self.get_argument("username"))
            self.set_secure_cookie("incorrect", "0")
            #self.render('index.html')
            self.redirect(self.reverse_url("main"))
        else:
            incorrect = self.get_secure_cookie("incorrect") or 0
            increased = str(int(incorrect)+1)
            self.set_secure_cookie("incorrect", increased)
            self.write("""<center>
                            Something Wrong With Your Data (%s)<br />
                            <a href="/">Try again</a>
                          </center>""" % increased)


class LogoutHandler(BaseHandler):
    def get(self):
        self.clear_cookie("user")
        self.redirect(self.get_argument("next", self.reverse_url("main")))

class RegisterHandler(BaseHandler):
    def get(self):
        self.render('register.html',error=None)
    @tornado.gen.coroutine
    def post(self):
        username =  tornado.escape.xhtml_escape(self.get_argument('username'))
        password =  tornado.escape.xhtml_escape(self.get_argument('password'))
        check_register_result = self.check_register(username,password)
        if check_register_result == 1:
            cursor.insert_one({"username": username, "password": password})
            self.set_secure_cookie('username',username)
            self.redirect(self.reverse_url("main"))
        elif check_register_result ==    3:
            self.render('register.html',error='username da ton tai')
        else:
            self.render('register.html',error='vui long nhap day du')
    def check_register(self,username,password):
        all = cursor.find()
        if username and password:
            if username not in [i['username'] for i in all ]: 
                return 1  
            else: return 3
        else:
            return 4

class Application(tornado.web.Application):
    def __init__(self):
        base_dir = os.path.dirname(__file__)
        settings = {
            "cookie_secret": "bZJc2sWbQLKos6GkHn/VB9oXwQt8S0R0kRvJ5/xJ89E=",
            "login_url": "/login",
            'template_path': os.path.join(base_dir, "templates"),
            'static_path': os.path.join(base_dir, "static"),
            'debug':False,
            "xsrf_cookies": True,
        }
        
        tornado.web.Application.__init__(self, [
            tornado.web.url(r"/", MainHandler, name="main"),
            tornado.web.url(r'/login', LoginHandler, name="login"),
            tornado.web.url(r'/logout', LogoutHandler, name="logout"),
            tornado.web.url(r'/register', RegisterHandler, name="register"),
        ], **settings)

def main():
    tornado.options.parse_command_line()
    Application().listen(port)
    tornado.ioloop.IOLoop.instance().start()

if __name__ == "__main__":
    main()


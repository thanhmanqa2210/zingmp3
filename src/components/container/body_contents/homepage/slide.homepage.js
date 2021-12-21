import { useState, useEffect } from "react";
function SlideShow() {
  let imgSlideShows = [
    {
      id: 1,
      song: "K-POP Hits",
      img: "https://photo-zmp3.zadn.vn/banner/b/d/e/3/bde31bbe43079a676472dd2d71f9f32c.jpg",
    },
    {
      id: 2,
      song: "My Color",
      img: "https://photo-zmp3.zadn.vn/banner/7/6/c/9/76c96325e420ca4e3d0724a23e322327.jpg",
    },
    {
      id: 3,
      song: "Quên đi thì hơn",
      img: "https://photo-zmp3.zadn.vn/banner/7/6/3/9/76397e9b2caa30269a2663682ba7816f.jpg",
    },
    {
      id: 4,
      song: "Candy",
      img: "https://photo-zmp3.zadn.vn/banner/6/9/d/8/69d8a5400b6125d6e951a23e2a0d4c2f.jpg",
    },
    {
      id: 5,
      song: "Cà Phê Quán Quen",
      img: "https://photo-zmp3.zadn.vn/banner/0/5/6/6/0566b90b26d40c9a4b3a2983e94d8b40.jpg",
    },
    {
      id: 6,
      song: "Làm Việc Mình",
      img: "https://photo-zmp3.zadn.vn/banner/9/8/c/e/98ce001d63b2bf3796b8e8a4334fcb9a.jpg",
    },
  ];
  const [count, setCount] = useState(1);
  const [count1, setCount1] = useState(2);
  const [count2, setCount2] = useState(3);
  const [index, setIndex] = useState({
    img1: 0,
    img2: 1,
    img3: 2,
  });

  useEffect(() => {
    setTimeout(() => {
      setIndex({
        img1: count,
        img2: count1,
        img3: count2,
      });
      count === imgSlideShows.length - 1 ? setCount(0) : setCount(count + 1);
      count1 === imgSlideShows.length - 1
        ? setCount1(0)
        : setCount1(count1 + 1);
      count2 === imgSlideShows.length - 1
        ? setCount2(0)
        : setCount2(count2 + 1);
    }, 3000);
  }, [count2]);

  return (
    <div className="slide-show">
      <div className="slide-show--left">
        <i className="fas fa-chevron-left" />
      </div>
      <div className="slide-show--item">
        <img src={imgSlideShows[index.img1].img} alt="" />
      </div>
      <div className="slide-show--item">
        <img src={imgSlideShows[index.img2].img} alt="" />
      </div>
      <div className="slide-show--item">
        <img src={imgSlideShows[index.img3].img} alt="" />
      </div>
      <div className="slide-show--right">
        <i className="fas fa-chevron-right" />
      </div>
    </div>
  );
}
export default SlideShow;

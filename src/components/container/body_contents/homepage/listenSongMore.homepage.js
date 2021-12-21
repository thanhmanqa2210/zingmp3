function ListenSongMore() {
    const listRecentlys=[
        {
            id:1,
            imgSong:"https://photo-resize-zmp3.zadn.vn/w240_r1x1_webp/cover/4/b/d/e/4bde5dbe497f39e748371e61becd6f87.jpg",
            title:"HyunA"
        },
        {
            id:2,
            imgSong:"https://photo-resize-zmp3.zadn.vn/w320_r1x1_webp/cover/3/1/b/6/31b6165e9b032cfb60d03342e592234a.jpg",
            title:"Đỉnh Cao OST Việt"
        },
        {
            id:3,
            imgSong:"https://photo-playlist-zmp3.zadn.vn/s1/mixtape?src=HavwqN7EYmrDGr6VBegUMHOLKPiyqPi41XLHrssOd5zNGWRUQysRNWP4KDzhofzNL144tZl3drW1JMxPR9FtMW5ARTnhZwaSLKOhZc34wrLcNIo2LyAW22nAOSuGqxnHA1TspX2OwqOh5N75HScxJ7WKSCeHoEiRAaOXoKR8lKrv6o7FVy6yJXyQAizqmxnHHrXrmpAHhnOJ3YESQBnEXaHthDUdFMj7gZT-NDCOG0qmL9kVVG&cv=1&size=thumb/240_240",
            title:"Mixtape Yêu Lại Từ Đầu"
        },
        {
            id:4,
            imgSong:"https://photo-playlist-zmp3.zadn.vn/s2/mixtape?src=HavwqN7EYmrDGr6VBegSG044GDzjmDT01WH1tshMtLS53K65Qu3M100FJu5XqDG00GjDqM3GWb81NnNITjxB1GqPHzazd88s5XvBxZlNttm1KmUfAfUVDajJ1AbtbvmX6na3zI2HpdGQJrNy8iMPTHuS3lKXm90a6Ku6zdB7XYnRImgm8DJ1U0qTLUe7DLipVfasCKbIq4Aar5wyd4RGGGCT7zDz&cv=1&size=thumb/240_240",
            title:"Mixtape Sài Gòn Hôm Nay Mưa"
        },
        {
            id:5,
            imgSong:"https://photo-playlist-zmp3.zadn.vn/user-playlist?src=HavwqN7EvKCI1oYSFOdq0rHDEvm_YV43LWDjrplTeLPQ1pc0CDcb0LW3Eu1dtA49MWStY63Q_m0NMo7NR9oj2rmPQ8ydoEHS4LKldcVVhaqH02-OPuhY75jJV9ewtEfFMWzyp3E0uKWC22t1D8Ux5mXU9v5Wc-DHNb9XmslGeHW16JMAEvtjNn1PUy1-dRTVGraXs7ZMkL4J12FKVDsvLHSE9uTutUi65b8Xr7-0lbCLNJw9FD6o5KTMTSjrZ_b13WSuXpAUkGL4GZZNCfwvLLmN8DKopRfL3qLsqcAQxWTP4dQ5C9gvKrWN8zSsphf91LLpstq&size=thumb/240_240",
            title:"Nhạc trung"
        },
        {
            id:6,
            imgSong:"https://photo-resize-zmp3.zadn.vn/w320_r1x1_webp/cover/3/9/7/8/3978ad7a0926b55dc8094a56bc44b8c3.jpg",
            title:"Nhạc Thư Giãn Tốt Nhất"
        },
        {
            id:7,
            imgSong:"https://photo-resize-zmp3.zadn.vn/w320_r1x1_webp/cover/3/5/3/8/3538565766aee9c4a61c1ff4aeb5a07d.jpg",
            title:"Khởi Động Ngày Mới"
        }
    ]

  return (
    <div className="listen-song-more">
      <div className="ls-more-title">
        <div className="title-name">Có Thể Bạn Muốn Nghe</div>
        <div className="full-item">
           <span>TẤT CẢ</span> 
           <i className="fas fa-angle-right" />
             </div>
      </div>
      <div className="ls-more-song">
          <div className="ls-more-song-item">
             <div className="img-song"><img src={listRecentlys[0].imgSong} alt="" /></div> 
              <p title={listRecentlys[0].title} className="song-title">{listRecentlys[0].title}</p>
          </div>
          <div className="ls-more-song-item">
             <div className="img-song"><img src={listRecentlys[1].imgSong} alt="" /></div>
              <p title={listRecentlys[1].title} className="song-title">{listRecentlys[1].title}</p>
          </div>
          <div className="ls-more-song-item">
              <div className="img-song"><img src={listRecentlys[2].imgSong} alt="" /></div>
              <p title={listRecentlys[2].title} className="song-title">{listRecentlys[2].title}</p>
          </div>
          <div className="ls-more-song-item">
              <div className="img-song"><img src={listRecentlys[3].imgSong} alt="" /></div>
              <p title={listRecentlys[3].title} className="song-title">{listRecentlys[3].title}</p>
          </div>
          <div className="ls-more-song-item">
              <div className="img-song"><img src={listRecentlys[4].imgSong} alt="" /></div>
              <p title={listRecentlys[4].title} className="song-title">{listRecentlys[4].title}</p>
          </div>
      </div>
    </div>
  );
}
export default ListenSongMore;

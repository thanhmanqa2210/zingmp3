import { useReducer, useEffect } from "react";
const initState = [0, 1, 2];
const PREV_SONG = "PREV";
const NEXT_SONG = "NEXT";
const AUTO_SONG = "AUTO";
const reducer = (states, action) => {
  switch (action) {
    case PREV_SONG:
      return states.map((state) => {
        if (state === 0) {
          state = 5;
        } else {
          state--;
        }
        return state;
      });
    case NEXT_SONG:
    case AUTO_SONG:
      return states.map((state) => {
        if (state === 5) {
          state = 0;
        } else {
          state++;
        }
        return state;
      });

    default:
      break;
  }
};

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

  const [index, dispatch] = useReducer(reducer, initState);
  useEffect(() => {
    setInterval(() => {
      dispatch(AUTO_SONG);
    }, 5000);
  }, []);
  // const [state,dispatch]=useReducer(reducer,initState);
  return (
    <div className="slide-show">
      <div onClick={() => dispatch(PREV_SONG)} className="slide-show--left">
        <i className="fas fa-chevron-left" />
      </div>
      <div className="slide-show--item">
        <img src={imgSlideShows[index[0]].img} alt="1" />
      </div>
      <div className="slide-show--item">
        <img src={imgSlideShows[index[1]].img} alt="2" />
      </div>
      <div className="slide-show--item">
        <img src={imgSlideShows[index[2]].img} alt="3" />
      </div>
      <div onClick={() => dispatch(NEXT_SONG)} className="slide-show--right">
        <i className="fas fa-chevron-right" />
      </div>
    </div>
  );
}
export default SlideShow;

import SlideShow from "./homepage/slide.homepage";
import Recently from "./homepage/recently.homepage";
import SongMore from "./homepage/listenSongMore.homepage";
function Person() {
  return (
    <div className="homepage">
      <SlideShow></SlideShow>
      <Recently></Recently>
      <SongMore></SongMore>
    </div>
  );
}
export default Person;

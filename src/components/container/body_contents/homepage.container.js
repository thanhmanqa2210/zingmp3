import SlideShow from "./homepage/slide.homepage";
import Recently from "./homepage/recently.homepage";
import SongMore from "./homepage/listenSongMore.homepage";
function HomePage() {
  return (
    <div className="homepage">
      <SlideShow></SlideShow>
      <Recently></Recently>
      <SongMore></SongMore>
    </div>
  );
}
export default HomePage;

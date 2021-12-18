import shirt_topic from "../../../../img/shirt_topic.png";
import uploadIcon from "../../../../img/uploadIcon.png";
import settingIcon from "../../../../img/settingIcon.png";
function Topic() {
  return (
    <div className="option-item topic" datatype="Chủ đề">
      <div className="topic-img">
        <img src={shirt_topic} alt="" />
      </div>
    </div>
  );
}
function Upload() {
  return (
    <div className="option-item upload" datatype="Tải lên">
      <div className="upload-img">
        <img src={uploadIcon} alt="" />
      </div>
    </div>
  );
}
function Setting() {
  return (
    <div className="option-item setting" datatype="Cài đặt">
      <div className="setting-img">
        <img src={settingIcon}  alt=""/>
      </div>
    </div>
  );
}
function User() {
  return <div className="option-item user"></div>;
}
export { Topic, Upload, Setting, User };

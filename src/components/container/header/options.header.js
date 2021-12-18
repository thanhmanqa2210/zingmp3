import {Topic,Upload,Setting,User} from "./options/option";
function Options(){
    return (
        <div className="options">
            <Topic></Topic>
            <Upload></Upload>
            <Setting></Setting>
            <User></User>
        </div>
    )
}
export default Options;
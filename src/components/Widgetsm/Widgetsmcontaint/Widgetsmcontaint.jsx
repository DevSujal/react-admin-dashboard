import "./Widgetsmcontaint.css"
import { Visibility } from "@mui/icons-material";

const Widgetsmcontaint = (props) => {
  return (
      <ul className="widgetsmlist">
        <li className="widgetsmlistitem">
          <img
            src="https://imgs.search.brave.com/TEXJ3DHIyAQE0pV8_khcQd5-dcbd6dQQ8VbKfjD8PwQ/rs:fit:500:0:0/g:ce/aHR0cDovL20uZ2V0/dHl3YWxscGFwZXJz/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/MjAyMy8wNi9QaG90/by1vZi1DdXRlLUFu/aW1lLUdpcmwuanBn"
            alt="profile"
            className="widgetsmimage"
          />
          <div className="widgetsmuser">
            <span className="widgetsmusername">{props.name}</span>
            <span className="widgetsmusertitle">{props.position}</span>
          </div>
          <button className="widgetsmbutton">
            <Visibility className="widgetsmicon"/>
            Display
          </button>
        </li>
      </ul>
  );
};

export default Widgetsmcontaint;

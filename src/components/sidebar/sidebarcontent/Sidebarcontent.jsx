import "./sidebarcontent.css";
import {
  LineStyle,
  MailOutline,
  PersonOutline,
  StorefrontOutlined,
  Timeline,
  TrendingUp,
  WorkOutline,
  Forum,
  PaidOutlined,
  MessageOutlined,
  Report,
  AssessmentOutlined,
} from "@mui/icons-material";
const Sidebarcontent = (props) => {
  return (
    <div className="sidebarmenu">
      <h3 className="sidebartitle">{props.title}</h3>
      <ul className="sidebarlist">
        <li className="sidebarlistitem active">
          {props.title === "Dashboard" ? (
            <LineStyle className="sidebaricon" />
          ) : props.title === "Quick Menu" ? (
            <PersonOutline className="sidebaricon" />
          ) : props.title === "Notifications" ? (
            <MailOutline className="sidebaricon" />
          ) : (
            <WorkOutline className="sidebaricon" />
          )}

          {props.first}
        </li>
        <li className="sidebarlistitem">
          {props.title === "Dashboard" ? (
            <Timeline  className="sidebaricon" />
          ) : props.title === "Quick Menu" ? (
            <StorefrontOutlined className="sidebaricon" />
          ) : props.title === "Notifications" ? (
            <Forum className="sidebaricon" />
          ) : (
            <Timeline className="sidebaricon" />
          )}
          {props.second}
        </li>
        <li className="sidebarlistitem">
          {props.title === "Dashboard" ? (
            <TrendingUp  className="sidebaricon" />
          ) : props.title === "Quick Menu" ? (
            <PaidOutlined className="sidebaricon" />
          ) : props.title === "Notifications" ? (
            <MessageOutlined className="sidebaricon" />
          ) : (
            <Report className="sidebaricon" />
          )}
          {props.third}
        </li>
        {props.title === "Quick Menu" && (
          <li className="sidebarlistitem">
           <AssessmentOutlined className="sidebaricon" />
            {props.fourth}
          </li>
        )}
      </ul>
    </div>
  );
};

export default Sidebarcontent;

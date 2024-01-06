import { ArrowForward } from "@mui/icons-material";
import "./sidebar.css";
import Sidebarcontent from "./sidebarcontent/Sidebarcontent";
import { useRef, useState } from "react";

const Sidebar = () => {

  const [isvisible, setIsVisible] = useState(false)

  const handleEvent = () => {
    if(!isvisible){
      sidebarRef.current.style.display = "flex"
      sidebarRef.current.style.background = "rgba(251, 251, 255, 0.9)"
      arrowRef.current.style.left = "180px"
      arrowRef.current.style.zIndex = "999"
      arrowRef.current.style.transform = "rotate(180deg)"
      setIsVisible(true)
    }else {
      sidebarRef.current.style.display = "none"
      sidebarRef.current.style.background = "white"
      arrowRef.current.style.left = "10px"
      arrowRef.current.style.transform = "rotate(0deg)"
      setIsVisible(false)
    }
  }

  const sidebarRef = useRef()
  const arrowRef = useRef()
  return (
    <div className="sidebar" >
    {window.innerWidth <= 600 &&  <div className="arrow" onClick={handleEvent} ref={arrowRef}>
        <ArrowForward />
      </div>}
      <div className="sidebarwrapper" ref={sidebarRef}>
        <Sidebarcontent
          title="Dashboard"
          first="Home"
          second="Analytics"
          third="Trending"
        />
        <Sidebarcontent
          title="Quick Menu"
          first="Users"
          second="Products"
          third="Transactions"
          fourth="Reports"
        />
        <Sidebarcontent
          title="Notifications"
          first="Mail"
          second="Feedback"
          third="Messages"
        />
        <Sidebarcontent
          title="Staff"
          first="Manage"
          second="Analytics"
          third="Reports"
        />
      </div>
    </div>
  );
};

export default Sidebar;

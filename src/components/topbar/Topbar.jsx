import { useState } from "react";
import "./Topbar.css";
import { Language, NotificationsNone, Settings } from "@mui/icons-material";
export default function Topbar() {

  const [isScrolled, setIsScrolled] = useState()
  window.onscroll = () => {
    setIsScrolled(window.scrollY === 0 ? false : true);
    return () => {
      window.onscroll = null
    }
  }
  return (
    <div className = {isScrolled ? "topbar scroll" : "topbar"}>
      <div className="topbarwrapper">
        <div className="topleft">
          <span className="logo">SUJALDEV</span>
        </div>
        <div className="topright">
          <div className="topbariconcontainer">
            <NotificationsNone />
            <span className="topiconbag">2</span>
          </div>
          <div className="topbariconcontainer">
            <Language />
            <span className="topiconbag">2</span>
          </div>
          <div className="topbariconcontainer">
            <Settings />
          </div>
          <img
            className="topavater"
            src="data:image/jpeg;base64,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"
            alt="my profile"
          />
        </div>
      </div>
    </div>
  );
}

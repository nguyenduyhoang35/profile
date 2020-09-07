import React, { useRef } from "react";
import useOutsideClick from "./useOutsideClick";
import "./Taskbar.scss";
import { useLocation } from "react-router-dom";
import { Icon, themes } from "../assets";
import pages from "../pages";

function Taskbar({ theme, setTheme }) {
  const ref = useRef();
  const { pathname } = useLocation();
  const path = pathname.slice(1);
  const [menu, showMenu] = React.useState(false);
  useOutsideClick(ref, () => {
    if (menu) {
      showMenu(!menu);
    }
  });

  return (
    <div id="taskbar" className={theme}>
      <ul id="menu" className={menu ? "" : "hidden"}>
        {Object.keys(themes).map((key) => (
          <li
            key={key}
            className={theme === key ? "active" : ""}
            onClick={() => setTheme(key)}
          >
            <img src={themes[key]} alt={key}></img>
            {key}
          </li>
        ))}
      </ul>
      <div
        id="settings"
        ref={ref}
        className={menu ? "active" : ""}
        style={{ backgroundImage: `url(${Icon("settings", theme)})` }}
        onClick={(e) => {
          showMenu(!menu);
        }}
      ></div>
      {path && (
        <div className="item">
          <img src={Icon(path, theme)} alt="" />
          <label>{pages[path].title}</label>
        </div>
      )}
      <div className="item right">Copyright &copy; 2020 HoangND</div>
    </div>
  );
}

export default Taskbar;

import "../Styles/navbar.scss";
import { NavLink } from "react-router-dom";
import { IconContext } from "react-icons";
import Dropdown from "./Dropdown";
import * as AiIcons from "react-icons/ai";
import * as BiIcons from "react-icons/bi";

export default function Navbar({ open, setDropdownCat, setDropdownDog, dropdownCat, dropdownDog }) {
  
  return (
    <IconContext.Provider value={{ color: "#fff", size: 40 }}>
      <nav className={open ? "sidenav" : "sidenavClosed"}>
        <div className="compact">
          <NavLink className="sideitem" to="/">
            <AiIcons.AiFillHome />
            <span className={open ? "linkText" : "linkTextClosed"}>Home</span>
          </NavLink>
        </div>

        <div className="compact">
          <button
            className="sideitem"
            id="nav-button"
            type="button"
            aria-haspopup="menu"
            aria-expanded={dropdownCat ? "true" : "false"}
            onClick={() => setDropdownCat((prev) => !prev)}
          >
            <BiIcons.BiSolidCat />
            <span className={open ? "linkText" : "linkTextClosed"} id={dropdownCat ? "bold" : "not-bold"}>
              Cats
            </span>
          </button>

          <Dropdown
            submenus={[
              {
                title: "Breeds",
                path: "cats",
                icon: "",
                className: "sub-nav-text",
              },

              {
                title: "Images",
                path: "images-cats",
                icon: "",
                className: "sub-nav-text",
              },
            ]}
            open={open}
            dropdown={dropdownCat}
          />
        </div>

        <div className="compact">
          <button
            className="sideitem"
            id="nav-button"
            type="button"
            aria-haspopup="menu"
            aria-expanded={dropdownDog ? "true" : "false"}
            onClick={() => setDropdownDog((prev) => !prev)}
          >
            <BiIcons.BiSolidDog />
            <span className={open ? "linkText" : "linkTextClosed"} id={dropdownDog ? "bold" : "not-bold"}>
              Dogs
            </span>
          </button>

          <Dropdown
            submenus={[
              {
                title: "Breeds",
                path: "dogs",
                icon: "",
                className: "sub-nav-text",
              },

              {
                title: "Images",
                path: "images-dogs",
                icon: "",
                className: "sub-nav-text",
              },
            ]}
            open={open}
            dropdown={dropdownDog}
          />
        </div>
      </nav>
    </IconContext.Provider>
  );
}

import "../Styles/navbar.scss";
import { NavLink } from "react-router-dom";
import { IconContext } from "react-icons";
import Dropdown from "./Dropdown";
import { useState } from "react";
import * as AiIcons from "react-icons/ai";
import * as BiIcons from "react-icons/bi";

export default function Navbar({ open }) {
  const [dropdownCat, setDropdownCat] = useState(false);
  const [dropdownDog, setDropdownDog] = useState(false);

  return (
    <IconContext.Provider value={{ color: "#fff", size: 40 }}>
      <nav className={open ? "sidenav" : "sidenavClosed"}>
        <NavLink className="sideitem" to="/">
          <AiIcons.AiFillHome />
          <span className={open ? "linkText" : "linkTextClosed"}>Home</span>
        </NavLink>
        <button
          className="sideitem"
          id="nav-button"
          type="button"
          aria-haspopup="menu"
          aria-expanded={dropdownCat ? "true" : "false"}
          onClick={() => setDropdownCat((prev) => !prev)}
        >
          <BiIcons.BiSolidCat />
          <span className={open ? "linkText" : "linkTextClosed"}>
            Cats
          </span>{" "}
        </button>

        <Dropdown
          submenus={[
            {
              title: "All Breeds",
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
        <button
          className="sideitem"
          id="nav-button"
          type="button"
          aria-haspopup="menu"
          aria-expanded={dropdownDog ? "true" : "false"}
          onClick={() => setDropdownDog((prev) => !prev)}
        >
          <BiIcons.BiSolidDog />
          <span className={open ? "linkText" : "linkTextClosed"}>
            Dogs
          </span>{" "}
        </button>

        <Dropdown
          submenus={[
            {
              title: "All Breeds",
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
      </nav>
    </IconContext.Provider>
  );
}

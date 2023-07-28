import "../Styles/navbar.scss";
import { NavLink } from "react-router-dom";

const Dropdown = ({ submenus, open, dropdown }) => {
    return (
      <nav className={open && dropdown ? "dropdown" : "dropdownClosed"}>
        {submenus.map((submenu, index) => (
          <NavLink key={index} className="sideitem" to={submenu.path}>
            <span className={open ? "dropDownText" : "dropDownTextClosed"}>
              {submenu.title}
            </span>
          </NavLink>
        ))}
      </nav>
    );
  };

export default Dropdown;


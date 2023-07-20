import '../Styles/navbar.scss';
import { NavLink } from "react-router-dom";
import { SidebarData} from './SidebarData'
import { IconContext } from 'react-icons';

export default function Navbar({open}) {
   

  return (
   <IconContext.Provider value={{color: '#fff', size: 40 }}>
    <nav className={open ? 'sidenav' : 'sidenavClosed'}>
        
        {SidebarData.map((item, index) =>{
            return <NavLink key={index} className="sideitem" to={item.path}>
            {item.icon}
            <span className={open ? 'linkText' : 'linkTextClosed'}>{item.title}</span>
        </NavLink>
        })}
    </nav>
    </IconContext.Provider>
  )
}
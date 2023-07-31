import '../Styles/header.scss'
import * as RiIcons from "react-icons/ri";
import { IconContext } from 'react-icons';

const Header = ({toggleOpen, open, setDropdownCat, setDropdownDog}) => {
    return (<IconContext.Provider value={{color: '#fff', size: 40 }}>
    <div className='header-wrapper'>
        <button className='menuBtn' onClick={() => {
  toggleOpen();
  setDropdownCat(false);
  setDropdownDog(false);
}}>
            {open? <RiIcons.RiMenuFoldLine />: <RiIcons.RiMenuUnfoldLine />}
        </button>
    <header>Curious Companions</header>
    </div>
    </IconContext.Provider>
    )
}

export default Header
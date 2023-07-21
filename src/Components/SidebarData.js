import * as AiIcons from "react-icons/ai";
import * as BiIcons from "react-icons/bi"

export const SidebarData = [
    {
        title: 'Home',
        path: "/",
        icon: <AiIcons.AiFillHome />,
        className: 'nav-text'
    },
    {
        title: 'Cats',
        path: "cats",
        icon: <BiIcons.BiSolidCat />,
        className: 'nav-text'
    },
    {
        title: 'Dogs',
        path: "dogs",
        icon: <BiIcons.BiSolidDog  />,
        className: 'nav-text'
    }
]
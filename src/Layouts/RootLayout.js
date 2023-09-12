import Header from "../Components/Header"
import Navbar from "../Components/Navbar"
import { Outlet } from "react-router-dom"
import { useState } from "react"
import '../Styles/main.scss'
import Footer from "../Components/Footer"

const RootLayout = () => {

    const [open, setopen] = useState(true)
    const [dropdownCat, setDropdownCat] = useState(false);
    const [dropdownDog, setDropdownDog] = useState(false);

    

    const toggleOpen = () => {
        setopen(!open)
    }
    return (
    <div className="root-layout">
        <Header toggleOpen={toggleOpen} open={open} setDropdownCat={setDropdownCat} setDropdownDog={setDropdownDog}/>

        <div className="wrapper">

        <Navbar open={open} setDropdownCat={setDropdownCat} setDropdownDog={setDropdownDog} dropdownCat={dropdownCat} dropdownDog={dropdownDog}/>   

        <main>
            <Outlet />
        </main>

        </div>

        <Footer />
    </div>
    )
}

export default RootLayout
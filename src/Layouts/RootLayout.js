import Header from "../Components/Header"
import Navbar from "../Components/Navbar"
import { Outlet } from "react-router-dom"
import { useState } from "react"
import '../Styles/main.scss'

const RootLayout = () => {

    const [open, setopen] = useState(true)

    const toggleOpen = () => {
        setopen(!open)
    }
    return (
    <div className="root-layout">
        <Header toggleOpen={toggleOpen} open={open}/>
        <div className="wrapper">
        <Navbar open={open}/>

        <main>
            <Outlet />
        </main>
        
        </div>
    </div>
    )
}

export default RootLayout
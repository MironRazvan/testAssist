import React from "react"
import AboutUs from "./AboutUs.js"
import Footer from "./Footer.js"
import Home from "./Home.js"
import Logo from "../images/fire-logo.png"
import Contact from "./Contact.js"

export default function () {
    const [curentPage, setCurentPage] = React.useState(<Home />)
    
    function changePageHome(e){
        e.preventDefault()
        setCurentPage(<Home />)
    }
    function changePageAboutUs(e){
        e.preventDefault()
        setCurentPage(<AboutUs />)
    }
    function changePageContact(e){
        e.preventDefault()
        setCurentPage(<Contact />)
    }

    return (
        <table className="page--container">
            <tr>
                <th rowSpan={2} colSpan={2}>
                    <nav className="nav--container">
                        <img src={Logo} className="nav--image" />
                        <a href="" onClick={changePageHome}>Home</a>
                        <a href="" onClick={changePageAboutUs}>About</a>
                        <a href="" onClick={changePageContact}>Contact</a>
                    </nav>
                </th>
                <td>
                    {curentPage}
                </td>
            </tr>
            <tr>
                <td className="page--footer">
                    <Footer />
                </td>
            </tr>
        </table>
    )
}
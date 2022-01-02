import React from 'react'
import { GiWoodPile } from "react-icons/gi";
import { Link } from "react-router-dom";
import * as Scroll from 'react-scroll';


function NavBar()  {
    return (
        <div className="navBar">
            <Link to="/" className="navBarItem"><GiWoodPile /><span> &nbsp;&nbsp; </span> DRVOLEKS<span> &nbsp;&nbsp; </span> <GiWoodPile /></Link>
            <Link to="/proizvodi" className="navBarItem">Naši proizvodi</Link>
            <Link to="/kontakt" className="navBarItem">Kontakt</Link>
        </div>

    )
}

export default NavBar

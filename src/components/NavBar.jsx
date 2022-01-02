import React from 'react'
import { GiWoodPile } from "react-icons/gi";
import { Link } from "react-router-dom";
import * as Scroll from 'react-scroll';


function NavBar()  {
    return (
        <div className="navBar">
            <Link to="/" className="navBarItem"><GiWoodPile /><span> &nbsp;&nbsp; </span> DRVOLEKS</Link>
            <Link to="/" className="navBarItem">Naši proizvodi</Link>
            <Link to="/" className="navBarItem">Kontakt</Link>
        </div>

    )
}

export default NavBar

import React from 'react'
import { GiWoodPile } from "react-icons/gi";
import { BsCartFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import * as Scroll from 'react-scroll';


function NavBar({cartNum})  {
    console.log({cartNum});
    return (
        <div className="navBar">
            <Link to="/" className="navBarItem"><GiWoodPile /><span> &nbsp;&nbsp; </span> DRVOLEKS<span> &nbsp;&nbsp; </span> <GiWoodPile /></Link>
            <Link to="/proizvodi" className="navBarItem">Naši proizvodi</Link>
            <Link to="/kontakt" className="navBarItem">Kontakt</Link>
            <Link to="/cart" className="cart-items">
                <div className='cart-num'><BsCartFill  />&nbsp;&nbsp; {cartNum}</div>
      
       
      </Link>
        </div>

    )
}

export default NavBar

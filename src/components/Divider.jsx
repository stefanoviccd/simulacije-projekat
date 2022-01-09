import React from 'react'
import { Link } from 'react-router-dom'

function Divider() {
    return (
        <><div className='tab'><Link to={"/proizvodi"} style={{textDecoration:"none", color:"black"}} >Svi materijali</Link> <Link to={"/proizvodi/akrilnePloce"} style={{textDecoration:"none", color:"black"}} >Akril ploče</Link><Link to={"/proizvodi/compactPloce"} style={{textDecoration:"none", color:"black"}} >Kompakt ploče</Link> <Link to={"/proizvodi/radnePloce"} style={{textDecoration:"none", color:"black"}} >Radne ploče</Link> </div>
        <div className="divider"></div></>
        
    )
}

export default Divider

import React from "react";
import './nav.css'
import { Link } from "react-router-dom";

function Navbar(){
    return(
        <>
        <div className="container">
            <div>
                <h1><Link to= '/' className="logo">GoSnippets</Link></h1>
            </div>
            <div className="listitems">
                <ul>
                    <li>About</li>
                    <li>Categories</li>
                    <li>Blog</li>
                    <li>Contant</li>
                </ul>
            </div>
            <div>
                <input type="text" placeholder="Serch" />
            </div>
            <div>
                <button>Add cart</button>
            </div>
        </div>
        <div className="nav_info">
            <ul>
               <li> < Link to = '/mobiles'>
                Mobiles
                </Link> </li>
                <li><Link to ='/computers'>Computers</Link></li>
                <li><Link to = '/men'>Men</Link></li>
                <li><Link to = '/women'>Women</Link></li>
                <li><Link to = '/kitchen'>Kitchen</Link></li>
                <li><Link to = '/furniture'>Furnitures</Link></li>
                <li><Link to = '/tv'>TV's</Link></li>
                <li><Link to= '/fridge'>Fridges</Link></li>
            </ul>
        </div>
        </>
    )
}

export default Navbar
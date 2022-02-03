import React, { useState } from 'react'
import logo from '../images/logo.svg'
import './styles/navbar.css'
const Navbar = ({displayType}) => {
    const [burgState,setBurgState]=useState([false,false]);
    const changState=()=>{
        if(!burgState[0]) return setBurgState([true,false]);
        return setBurgState([false,true]);
    }
    return (
        <div className="navbar">
            <div className="navbar--header flex-row">
            <img id="logo" src={logo} alt=""/>
            <div className={`navbar--burg flex-col ${burgState[0]?"open":""} ${displayType==="desktop"?"hide-for-desktop":""}`} onClick={changState}>
                <span id="line-1"></span>
                <span id="line-2"></span>
                <span id="line-3"></span>
            </div>
            <ul className={`navbar--links ${displayType==="mobile"?"hide-for-mobile":""} flex-row`}>
                <li>How we work</li>
                <li>Blog</li>
                <li>Account</li>
                <li id="cta-btn">View plans</li>
            </ul>
            </div>
            <div className={`overlay ${(burgState[0]&&displayType==="mobile")?"fade-in":(burgState[1])?"fade-out":""}`}>
            <ul className=" navbar--links flex-col">
                <li>How we work</li>
                <li>Blog</li>
                <li>Account</li>
                <li>View plans</li>
            </ul>
            </div>
            
        </div>
    )
}
export default Navbar;
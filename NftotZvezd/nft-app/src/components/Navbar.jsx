import React from 'react';
import Logo from "../assets/Logo.png";
import Burger from "../assets/Burger.svg";

const Navbar = () => {
    return (
        <div style={{
            display:"flex",
            width:"100%",
            justifyContent:"space-between",
            alignItems:"center"
        }}>
            <img src={Logo} width="136px" height="65px"/>
            <img src={Burger} width="30px" height="12px"/>
        </div>
    );
};
export default Navbar;
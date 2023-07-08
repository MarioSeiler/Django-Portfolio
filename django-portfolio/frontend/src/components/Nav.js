import React from 'react';
import { NavLink } from "react-router-dom";


const Nav = () =>{
    return (
        <div className="top-0 left-0 w-screen m-0 mx-auto flex justify-end">
            <a href="/home"><NavBarLink text="Home"></NavBarLink></a>
            <a href="/skills"><NavBarLink text="Skills"></NavBarLink></a>
            <a href="/projects"><NavBarLink text="Projects"></NavBarLink></a>
            <a href="/contact"><NavBarLink text="Contact"></NavBarLink></a>
        </div>  
    )
};

const NavBarLink = ({text}) => (
    <div className="mr-8 relative flex items-center justify-center 
    h-16 min-w-full mx-auto text-blue1 font-bold text-lg hover:text-xl
    w-24">
        <NavLink
            to={"/" + text}
  className={({ isActive }) =>
    isActive ? "border-b-2 border-blue1 " : ""
  }
>
  {text}
</NavLink>
    </div>
);

export default Nav;

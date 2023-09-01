import { NavLink } from "react-router-dom";
import React from "react";
import MobileNavBar from "./MobileNavBar";

const Nav = () => {
	

    return (
        <div>
            <div className='hidden sm:block'>
                <div className="top-0 left-0 w-screen m-0 mx-auto flex justify-end">
                    <div><NavBarLink text="Home"></NavBarLink></div>
                    <div><NavBarLink text="Skills"></NavBarLink></div>
                    <div><NavBarLink text="Projects"></NavBarLink></div>
                    <div><NavBarLink text="Contact"></NavBarLink></div>
                </div>  
            </div>
            <div className='sm:hidden'>
                <MobileNavBar />
            </div>
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

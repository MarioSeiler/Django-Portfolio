import { AiOutlineMenu } from 'react-icons/ai';
import React, { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";



const MobileNavBar = () => {
  
  const [open, setOpen] = useState(false);
  
  const NavBarLink = ({text}) => (
      <div className="mr-8 relative flex justify-center mt-10 min-w-full mx-auto text-blue1 font-bold text-lg hover:text-xl
      w-24" onClick={() => { setOpen(false); }}>
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

    return (
<div>
      <button className="fixed flex justify-end w-full" onClick={() => { setOpen(true); }}>
        <div className='rounded-5 mx-10 mt-6 px-2 py-1 mb-0 rounded-md'>
          <AiOutlineMenu size="46" className='text-blue1 hover:scale-105 transition-all cursor-pointer'/>
        </div>
      </button> 
        {open ? <div className='fixed inset-0 top-0 left-0 bg-blue2 w-full h-screen bg-opacity-70 backdrop-blur-sm'>
          <div className="inset-0 top-0 l-0 p-5">
            <div
              className="w-full bg-white rounded-xl p-5 transition-all"
              
            >
              <div className="flex">
                <div className="top-0 left-0 w-screen m-0 mx-auto justify-end">
                  <div className="h-7 text-center font-bold text-darkGray1 text-xl">Navigation</div>
                  <div><NavBarLink text="Home"></NavBarLink></div>
                  <div><NavBarLink text="Skills"></NavBarLink></div>
                  <div><NavBarLink text="Projects"></NavBarLink></div>
                  <div><NavBarLink text="Contact"></NavBarLink></div>
                </div>
                <IoCloseOutline
                  className="w-7 h-7 fixed hover:scale-110 transition-all cursor-pointer right-10"
                  onClick={() => { setOpen(false); }}
                />
              </div>
            </div>
          </div>
        </div> : <></>}
    </div>
  )
};


export default MobileNavBar;
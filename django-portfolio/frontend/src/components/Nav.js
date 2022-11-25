import { FaBeer } from 'react-icons/fa';

import React from 'react';


class Nav extends React.Component{
    render() {
        return (
            <div className="fixed top-0 left-0 h-screen w-36 m-0 flex flex-col bg-gray-700 text-black shadow-lg">
                <a href="/home"><NavBarLink text={<FaBeer size="32" />}></NavBarLink></a>
                <a href="/home"><NavBarLink text="Home"></NavBarLink></a>
                <a href="/about-me"><NavBarLink text="About me"></NavBarLink></a>
                <a href="/skills"><NavBarLink text="Skills"></NavBarLink></a>
                <a href="/projects"><NavBarLink text="Projects"></NavBarLink></a>
                <a href="/contact"><NavBarLink text="Contact"></NavBarLink></a>
            </div>  
        )
    }
};

const NavBarLink = ({text}) => (
    <div className="sidebar-link">
        {text}
    </div>
);

export default Nav;

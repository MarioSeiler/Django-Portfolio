import React from 'react';


class Nav extends React.Component{
    render() {
        return (
            <div className="fixed top-0 left-0 w-screen m-0 mx-auto flex bg-main1 shadow-lg justify-end">
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
    <div className="mr-8 relative flex items-center justify-center 
    h-16 min-w-full mx-auto shadow-lg bg-main1 text-white hover:text-black font-bold text-base
    transition delay-75 hover:bg-main5 duration-300 w-24">
        {text}
    </div>
);

export default Nav;

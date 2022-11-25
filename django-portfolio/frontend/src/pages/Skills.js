import React, { useState, useEffect } from 'react'


const Skills = () => {

    let [skills, setSkills] = useState([])

    useEffect(() => {
        getSkills()
    }, [])

    let getSkills = async () => {

        let response = await fetch('/rest/technologies/')
        let data = await response.json()
        console.log(data)
        setSkill(data)
    }

    return ( 
            <div className="flex items-center justify-center h-screen w-full">

                    <div className="bg-white p-8 shadow-lg shadow-slate-200 rounded-lg w-full md:w-2/3 lg:w-1/3">
    
    <div className="flex">
        <h3 className="flex-col py-1 px-2">Django {skills.name}</h3>
        <div className="flex w-full items-center justify-center">
        <div className="w-full bg-slate-100 flex-col h-4">
            <div className="bg-indigo-400 h-full rounded text-xs font-medium py-[1px] text-indigo-100 text-center" style={{width: '50%'}}></div>
        </div>
        </div>
    </div>
    </div>

        </div>
    );
};


export default Skills;
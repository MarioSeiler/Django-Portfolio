import React, { useState, useEffect } from 'react'
import ProjectItem from '../components/ProjectItem'

const Project = () => {

    let [projects, setProjects] = useState([])

    useEffect(() => {
        getProjects()
    }, [])

    let getProjects = async () => {

        let response = await fetch('http://localhost:8000/rest/projects/')
        let data = await response.json()
        setProjects(data)
    }

    return ( 
        <div className='h-full'>
            <div className="p-8 2xl:columns-3 md:columns-2 sm-columns-1 space-y-5">
            
                {projects.map((project, index) => (
                    <ProjectItem key={index} project={project} />
                ))}
            </div>
        </div>
    )
}


export default Project
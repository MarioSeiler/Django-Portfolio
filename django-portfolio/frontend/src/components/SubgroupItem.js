import React, { useState, useEffect } from 'react'
import SkillItem from '../components/SkillItem'

const SubgroupItem = ({ subgroup }) => {

    let [skills, setSkills] = useState([])

    useEffect(() => {
        getSkills()
    })

    let getSkills = async () => {

        let response = await fetch('http://localhost:8000/rest/technologies/s/'+subgroup.id)
        let data = await response.json()
        setSkills(data)
    }
  return (
      <div className="bg-white p-8 shadow-lg shadow-slate-200 rounded-lg">  
        <h3 className="py-1 px-2 font-bold">{subgroup.name}</h3>
          <div className="w-full items-center justify-center">
            <div>
              {skills.map((skill, index) => (
                <div className="p-2">
                    <SkillItem key={index} skill={skill} />
                </div>
            ))}
            </div>
        </div>  
      </div>
  )
}

export default SubgroupItem
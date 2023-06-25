import React from 'react'

const SkillItem = ({skill}) => {
  return (
    <div>
          <h3 className="py-1 px-2">{skill.name}</h3>
          <div className="w-full items-center justify-center">
              <div className="w-full bg-slate-100 h-4">
          <div className="bg-main5 h-full rounded text-xs font-medium py-[1px] text-indigo-100 text-center" style={{width: skill.mastery+'%'}}></div>
        </div>
        </div>
      </div>
  )
}

export default SkillItem
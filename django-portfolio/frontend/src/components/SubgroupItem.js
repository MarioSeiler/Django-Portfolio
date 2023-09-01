import React from 'react'

const SubgroupItem = ({ subgroup }) => {

  return (
    <div className = "p-2">
      <div className="bg-white p-8 shadow-lg shadow-slate-200 rounded-lg">  
        <h3 className="py-1 px-2 font-bold">{subgroup.name}</h3>
          <div className="w-full items-center justify-center">
            <div>
              {subgroup.technologies.map((tech) => (
          <div key={tech.id} className='p-2'>
          <h3 className="py-1 px-2">{tech.name}</h3>
          <div className="w-full items-center justify-center">
              <div className="w-full bg-slate-100 h-4">
          <div className="bg-blue3 h-full rounded text-xs font-medium py-[1px] text-center" style={{width: tech.mastery+'%'}}></div>
        </div>
        </div>
      </div>
        ))}
            </div>
        </div>  
      </div>
    </div> 
  )
}

export default SubgroupItem
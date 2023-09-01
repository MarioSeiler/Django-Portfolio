import React, { useState } from "react";


const ProjectItem = ({ project }) => {

  const [open, setOpen] = useState(false);

  return (
    <div className='p-4 min-h-min'>
      <button className="w-full bg-white p-8 shadow-lg shadow-slate-200 rounded-lg hover:text-blue1 transition ease-in-out delay-150 sm:hover:-translate-y-1 md:hover:scale-110 md:duration-300" onClick={() => { setOpen(!open); }}><div className="font-bold text-2xl w-full text-center p-4">{project.name}</div>
      {open ? <div id={project.name} className="m-4">
        <div className="border-lightGray border-t">

              <div className="mt-4">
                  <div className="flex justify-between my-3">
                    <div className="leading-8 text-darkGray2 font-bold text-md">Technologies</div>
                    <div className="leading-8 w-max">
                  {project.technologies.map((tech) => (
          <div className='text-center font-bold text-blue1' key={tech.id}>{tech.name}</div>
        ))}
                    </div>
                  </div>

                  <div className="flex justify-between my-3">
                    <div className="w-full leading-8 text-darkGray2 font-bold text-md max-w-xxxs text-left">Github URL</div>
                    <div className="leading-8 text-right max-w-xxs">
                <div><a className="hover:text-blue2 w-max" target="_blank" rel="noreferrer" href={project.github}>{project.github}</a></div>
                    </div>
            </div>
            <div className="flex justify-between my-3">
                    <div className="w-full text-left leading-8 text-darkGray2 font-bold text-md max-w-xxxs">Description</div>
                    <div className="text-right w-max text-black">
                  <div>{ project.description }</div>
                    </div>
                  </div>
              </div>
        </div>
        </div> : <></>}
        </button>
      </div>
  )
}

export default ProjectItem
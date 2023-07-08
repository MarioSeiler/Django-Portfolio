import React from 'react'

function showProjectDetail(id) {
  var divElement = document.getElementById(id);
  if (divElement.classList.contains("hidden")) {
    divElement.classList.remove("hidden");
  } else {
    divElement.classList.add("hidden");
  }
}

const ProjectItem = ({ project }) => {

  return (
    <div className='p-4'>
        <button className="w-full bg-white p-8 shadow-lg shadow-slate-200 rounded-lg hover:text-blue1" onClick={() => showProjectDetail(project.name)}><div className="font-bold text-2xl w-full text-center p-4">{project.name}</div>
      <div id={project.name} className="m-4 hidden">
        <div className="border-lightGray border-t">

              <div className="mt-4 text-gray-800">
                  <div className="flex justify-between my-3">
                    <div className="leading-8 text-gray-500 font-bold text-md">Technologies</div>
                    <div className="leading-8 w-max">
                  {project.technologies.map((tech) => (
          <div className='text-center font-bold text-darkGray1' key={tech.id}>{tech.name}</div>
        ))}
                    </div>
                  </div>

                  <div className="flex justify-between my-3">
                    <div className="w-full leading-8 text-gray-500 font-bold text-md max-w-xxxs text-left">Github URL</div>
                    <div className="leading-8 text-right max-w-xxs">
                <div><a className="hover:text-blue2 w-max" onclick="return false;" target="_blank" rel="noreferrer" href={project.github}>{project.github}</a></div>
                    </div>
            </div>
            <div className="flex justify-between my-3">
                    <div className="w-full text-left leading-8 text-gray-500 font-bold text-md max-w-xxxs">Description</div>
                    <div className="text-right w-max">
                  <div>{ project.description }</div>
                    </div>
                  </div>
              </div>
        </div>
        </div>
        </button>
      </div>
  )
}

export default ProjectItem
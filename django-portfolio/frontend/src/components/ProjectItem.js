import React from 'react'

function showProjectDetail(id) {
  var divElement = document.getElementById(id);
  if (divElement.classList.contains("hidden")) {
    divElement.classList.remove("hidden");
  } else {
    divElement.classList.add("hidden");
  }
}

const ProjectItem = ({project}) => {
  return (
    <div>
        <button class="w-full" onClick={() => showProjectDetail(project.name)}><div class="text-2xl w-full text-center border-b-2 p-4">{project.name}</div></button>
      <div id={project.name} className="m-4 hidden none">
        <div class="border-gray-200 ">

              <div class="mt-4 text-gray-800">
                  <div class="flex justify-between my-3">
                    <div class="w-full font-medium leading-8 text-gray-500 text-md max-w-xxxs">Technologies</div>
                    <div class="leading-8 text-right max-w-xxs">
                <div>{project.technologies}</div>
                    </div>
                  </div>

                  <div class="flex justify-between my-3">
                    <div class="w-full font-medium leading-8 text-gray-500 text-md max-w-xxxs">Github URL</div>
                    <div class="leading-8 text-right max-w-xxs">
                <div>{project.github}</div>
                    </div>
            </div>
            <div class="flex justify-between my-3">
                    <div class="w-full font-medium leading-8 text-gray-500 text-md max-w-xxxs">Description</div>
                    <div class="text-right">
                <div>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</div>
                    </div>
                  </div>
              </div>
        </div>
      </div>
      </div>
  )
}

export default ProjectItem
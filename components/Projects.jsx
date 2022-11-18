import React from 'react'
import ProjectItem from './ProjectItem'

export const Projects = () => {
  return (
    <div className='py-16' id="projects">
      <div className='max-h-full max-w-full' >
        <h2 className='text-6xl px-5 pt-3 '>Latest Projects</h2>
        <div className='p-5 flex-auto sm:flex'>
          <ProjectItem image="/img_1.png" title="Kostume"/>
          <ProjectItem image="/img_1.png" title="Vegas"/>
        </div>
      </div>
    </div>

  )
}

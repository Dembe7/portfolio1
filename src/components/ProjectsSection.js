import React from 'react'
import { Projects } from './Myprojects'
import ProjectsItem from './ProjectsItem'
import './Projectsection.css'

export default function ProjectsSection() {
  return (
    <div>
        <div className="container4">
            <h2>Projects</h2>
            <h3>This is some of my recent work</h3>
            <ProjectsItem />
            
        </div>        
    </div>
  )
}

import React from 'react'
import Ptext from './Ptext'
import SectionTitle from './Sectiontitle'
import kanye from './kanye.jpeg'
import './AboutSection.css'



export default function AboutSection() {
  return (
    <div className='AboutSection'>
        <div className="container3">
            <div className="aboutSection-left">
            <div className="section-title">
                <p>Let me introduce myself</p>
                <h2 className='bigtitle'>About me</h2>
            </div>

                <Ptext className='para'>
                My name is Moey, I'm a junior software developer, have a look at my work and leave
                </Ptext>
                <div className='aboutSection-buttons'>
                <a className='sml' href="/projects" >
                    Projects
                </a>
                <br></br>
                {/* <a className='sml' href="/about" >
                    bout
                    </a> */}
                </div>
            </div>
            <div className="aboutSection-right">
                <img src={kanye} alt=""  />
            </div>
        </div>
    </div>
  )
}

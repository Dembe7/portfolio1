import React from "react";
import HeroImg from '../components/HeroImg.jpeg'
import Button from "./Button";
import Ptext from "./Ptext";
import './Hero.css'


export default function HeroSection() {
    return (
        <div className="hero">
            <div className="container2">
                <h1 className="heading">
                    <span>Hello.  </span>
                    <span></span>
                </h1>
                <div >
                    <img className="img" src={HeroImg} alt="" />
                </div>
                <div className="hero_info">
                    <Ptext> My name is Moey, I'm a junior software developer, have a look at my work</Ptext >
                    < Button btnLink="/projects" btnText="See my work" />
                    <div className="social">
                        <div className="social-indicator">

                        </div>
                    </div>
                    
                </div>

            </div>
        </div>
    )
}
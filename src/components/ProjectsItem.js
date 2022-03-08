import React from 'react'
import './ProjectItem.css'
import { MenuItems } from './Navbar/MenuItem'
import { Projects } from './Myprojects'
import StreetArt from './Streetart.png'
import TictacToe from './tictactoe.png'
import Deshert from './Deshert.png'


export default function ProjectsItem() {
  return (
    <div className='container5'>
        <div className='container6'>

        <img src={StreetArt} alt="" />
        <div className="projectItem__info">
          <h3 className="projectItem__title">StreetArt</h3>
            <p className="projectItem__desc">This is a website built with Ruby, includes sign up/login and posting features</p>
        </div>

      </div>
      <div className='container6'>

        <img src={TictacToe} alt="" />
        <div className="projectItem__info">
          <h3 className="projectItem__title">Tic Tac Toe</h3>
            <p className="projectItem__desc">This is a simple TicTacToe game built with javascript</p>
        </div>

      </div>
      <div className='container6'>

        <img src={Deshert} alt="" />
        <div className="projectItem__info">
          <h3 className="projectItem__title">DeShert</h3>
            <p className="projectItem__desc">A group project built with React, user is able to customise shirts</p>
        </div>

      </div>
      

    </div>
  )
}

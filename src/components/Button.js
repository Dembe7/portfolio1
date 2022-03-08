import React from 'react'
import './Button.css'

export default function Button({ btnLink, btnText, outline }) {
  return (
    <div className='button' outline={outline}>
        <a className='sml' href="/projects" to={btnLink} >
            {btnText}</a>
    </div>
  )
}

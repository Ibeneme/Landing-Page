import React from 'react'
import "./button.css"


export const Buttonblue = (props) => {
  

  return (
    
    <div>
        <button
        className="hero-btn-white hero-btn-bounce "
        style={{marginTop:'1em'}}>
            {props.name}
        </button>
    </div>
  )
}

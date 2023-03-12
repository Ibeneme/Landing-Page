import React from 'react'
import './Sectionthree.css'
import Svg from './images/Group 1.svg'

import { Buttonblue } from '../button/ButtonWhite'

export const SectionThree = () => {
  return (
    <div className='div-background'>
        <div className='div-background-div'>
            <h1 className='div-background-h1'> 
                We take your security seriously
            </h1>
            <p>Passcoder is certified to the highest industry data privacy standards 
                — protecting you and your customers' privacy. We regularly ask your 
                consent third-party access to your details 
            </p>
            <Buttonblue />
        </div>
        <div className='div-background-two'>
            <img className='div-background-img' src={Svg} alt={Svg}/>
        </div>


    </div>
  )
}

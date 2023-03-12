import React from 'react'
import "./SectionOne.css"
import Svg from "./images/Rectangle.svg"
import Logo  from "./images/Vector.svg"

export const Sectionone = () => {
  return (
    <div className='centering
      '>
      <div className='padding-section-one'>
        <div>
          <h1 
            className="h1-hero">
            Build for the future of a digital ID.
          </h1>
          <p 
            className="p-hero">
            Bringing tomorrow's solutions to life, 
            with our customer-focused solutions, today.
          </p>   
        </div>
        </div>
       
        <div className='div-container-gray'>
            <div className='div-container-gray-one'>
            <img className="image-of-logo" src={Logo} alt="svg" />
                <h1 className='h1-section-one'> Passcoder unique ID</h1>
                <p className='p-section-one'>Securely get verified on all platforms, that require use of KYC
                  with just your unique Passcoder ID. 
                  <br />
                  Just sign up and Verify Your Identity with Passcoder. 
                  you'll be given a unique ID for all your data used across any platform
                  <br /><br />
                  We Store a list of data for you to use anytime, anyday, anywhere.
                  <br />
                  - Bio data: For regular data forms<br />
                  - Extended Bio data: For Fintechs, De-fi companies and more<br />
                  - Academic Data: For Job applications<br />
                  - Medical Data: For Hospital and Emergency Services</p>
      
            </div>
            <div className='center-this-image'>
              <img className="image-in-div" src={Svg} alt="svg" />
            </div>
            
        </div>

     
        
       
    </div>
    
  )
}

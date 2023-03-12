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
            Bringing tomorrow's solutions to life
            with our customer-focused solutions today.
          </p>   
        </div>
        </div>
       
        <div className='div-container-gray'>
            <div className='div-container-gray-one'>
            <img className="image-of-logo" src={Logo} alt="svg" />
                <h1 className='h1-section-one'> Passcoder unique ID</h1>
                <p className='p-section-one'>Securely get verified on all websites and applications that require use of KYC
                  with just your unique Passcoder ID. 
                  <br />
                  Just sign up and verify your identity with Passcoder. 
                  you'll be given a unique ID for all your data used across any website and mobile applications
                  <br /><br />
                  <br />
                  We Store a list of data for you to use anytime, anyday, anywhere.
                  <br />
                  <br />
                 <b> - Bio data: </b> For regular data forms<br />
                 <b> - Extended Bio data: </b> For Fintechs, De-fi companies and more<br />
                 <b> - Academic Data: </b> For Job applications<br />
                 <b> - Medical Data: </b> For Hospital and Emergency Services</p>
      
            </div>
            <div className='center-this-image'>
              <img className="image-in-div" src={Svg} alt="svg" />
            </div>
            
        </div>

     
        
       
    </div>
    
  )
}

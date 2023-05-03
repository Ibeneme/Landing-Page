import React, { useEffect } from 'react'
import "./SectionOne.css"
import Svg from "../Hero/images/Mock up 3 1.png"
import Logo  from "./images/Vector.svg"
import AOS from 'aos';
import 'aos/dist/aos.css';

export const Sectionone = () => {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div data-aos="zoom-in-up" className='centering 
      '>
      <div className='padding-section-one'>
        <div>
          <h1 
            className="h1-hero">
            Goodbye to identity theft, the future is here.
          </h1>
          <p 
            className="p-hero">
           All your important data, encrypted and in your control
          </p>   
        </div>
        </div>
       
        <div className='div-container-gray' data-aos="zoom-in">
            <div className='div-container-gray-one'>
            <img className="image-of-logo" src={Logo} alt="svg" />
                <h1 className='h1-section-one'> Passcoder unique ID</h1>
                <p className='p-section-one'>Securely get verified on all websites and applications that require use of KYC
                  with just your unique Passcoder ID. 
                  <br />
                  Just sign up and verify your identity with Passcoder. 
                  You'll be given a unique ID for all your data used across any website and mobile applications
                  <br /><br />
                  <br />
                  {/* We Store a list of data for you to use anytime, anyday, anywhere.
                  <br />
                  <br />
                 <b> - Bio data: </b> For regular data forms<br />
                 <b> - Extended Bio data: </b> For Fintechs, De-fi companies and more<br />
                 <b> - Academic Data: </b> For Job applications<br />
                 <b> - Medical Data: </b> For Hospital and Emergency Services */}
                 </p>
      
            </div>
            <div data-aos="zoom-in" className='center-this-image'>
              <img className="image-in-div" src={Svg} alt="svg" />
            </div>
            
        </div>

     
        
       
    </div>
    
  )
}

import "./Hero.css"
import React, { useEffect } from 'react'
import Rectangle from './images/Mockup 1 1.png'
import { Buttonblue } from "../button/Buttonblue"
import { Buttongray } from "../button/Buttongray"
import AOS from 'aos';
import 'aos/dist/aos.css';


   

export const Hero = () => { 
    useEffect(() => {
        AOS.init();
      }, [])
  return (

    <>
        <div data-aos="zoom-in" className="hero-div">

            <div  data-aos="zoom-in" className="new-width-changes">
                <div className="div-gray-tray">
                    <div className="div-for-new">
                        <p>New</p>
                    </div>
                    <p>Passcoder is Live in Nigeria!</p>
                </div>
                <h1 className="h1-hero">Get One Digital  ID  for all platforms</h1>
                <p className="p-hero">Passcoder helps you handle your KYC verification, 
                    across all websites and applications. One digital ID for anytime, anywhere, any-day</p>
                <div className="hero-btn-div">
                    <Buttonblue />
                   <Buttongray />
                </div>
            </div>
            <div data-aos="flip-left"  >
                <img 
                className="img-for-width"
                src={Rectangle} 
                alt="illustration" 
            
                
                />
                
            </div>
        </div>



    </>
    
  )
}

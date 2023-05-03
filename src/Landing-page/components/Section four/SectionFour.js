import './SectionFour.css'
import React, { useEffect } from 'react'
import { Buttonblue } from "../button/Buttonblue"
import { Buttongray } from "../button/Buttongray"
import Svg from './images/Frame.svg'
import AOS from 'aos';
import 'aos/dist/aos.css';



export const SectionFour = () => {
    useEffect(() => {
        AOS.init();
      }, [])

  return (

    <>
        <div data-aos="zoom-in"  className="hero-div">

            <div className="new-width-changes" >
                {/* <div className="div-gray-tray">
                    <div className="div-for-new">
                        <p>New</p>
                    </div>
                    <p>Passcoder is Live in Nigeria!</p>
                </div> */}
                <h1 className="h1-hero">So why 
                <span 
                style={{
                    backgroundColor:"orangered",
                    color: "white",
                    padding: "0.2em 0.4em",
                    marginLeft: "0.3em",
                    
                    }}>Passcoder? </span></h1>
                <p className="p-hero">
                Get verified on any website or mobile application needing KYC in minutes — not hours — not days with our simple and out-of-the-box solution. Once you are verified on Passcoder, you are verified everywhere else.
                 </p>
                 
            <div  data-aos="zoom-in"  className="hero-btn-div">
                    <Buttonblue />
                   <Buttongray />
                </div>
            </div>
            <div >
                <img 
                className="img-for-width"
                src={Svg} 
                alt="illustration" 
            
                
                />
                
            </div>
        </div>



    </>
    
  )
}

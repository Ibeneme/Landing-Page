import React, { useEffect } from 'react'
import { Buttonblue } from '../button/ButtonWhite'
import Svg from './images/Frame.svg'
import './points.css'
import AOS from 'aos';
import 'aos/dist/aos.css';


const Points = () => {
    useEffect(() => {
        AOS.init();
      }, [])
    
  return (

    <>
    <div data-aos="zoom-in" className="hero-div"
    style={{
        backgroundColor: 'blanchedalmond'
    }}>

        <div className="new-width-changes" >
            {/* <div className="div-gray-tray">
                <div className="div-for-new">
                    <p>New</p>
                </div>
                <p>Passcoder is Live in Nigeria!</p>
            </div> */}
            <h1 className="h1-hero">Get Loyalty Points and best of discounts while using Passcoder
            </h1>
            <p className="p-hero">Businesses can offer loyalty points directly to Passcoder users ID to improve brand loyalty
            and customer retention. Passcoder users get the best discounts and offers from businesses.</p>
            <div className="hero-btn-div">
                <Buttonblue name="Get Started for Free"/>
            </div>
        </div>
        <div data-aos="fade-left" >
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

export default Points
import React from 'react'
import { Buttonblue } from '../button/ButtonWhite'
import Svg from './images/Frame.svg'
import './points.css'

const Points = () => {
  return (

    <>
    <div className="hero-div"
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
            <Buttonblue/>
             
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

export default Points
import React, { useEffect } from "react";
import "./qualities.css";
import { Buttonblue } from "../button/Buttonblue";
import { Buttongray } from "../button/Buttongray";

import Rectangle from '../Hero/images/Mockup 1 1.png'
import AOS from 'aos';
import 'aos/dist/aos.css';








const Qualities = () => {
  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <>
    <div  data-aos="zoom-in" className="hero-div"
    style={{
      marginTop:'1em'
    }}>

<div data-aos="zoom-in" className="new-width-changes">
    <h1
    className="h1-hero">A digital store for all your data</h1>
    <p>We Store a list of data for you to use anytime, anyday, anywhere.
                  <br />
                  <br />
                 <b> - Bio data: </b> For regular data forms<br />
                 <b> - Extended Bio data: </b> For Fintechs, De-fi companies and more<br />
                 <b> - Academic Data: </b> For Job applications<br />
                 <b> - Medical Data: </b> For Hospital and Emergency Services
                 </p>  <div className="hero-btn-div">
        <Buttonblue />
       <Buttongray />
    </div>
</div>
<div data-aos="zoom-in" >
    <img 
    className="img-for-width"
    src={Rectangle} 
    alt="illustration" 

    
    />
    
</div>
</div> 
    </>
    // <div className="div-values values-quality">
    //   <h1> A digital store for all your data </h1>
    //   <p className='p-section-one'>
    //             We Store a list of data for you to use anytime, anyday, anywhere.
    //               <br />
    //               <br />
    //              <b> - Bio data: </b> For regular data forms<br />
    //              <b> - Extended Bio data: </b> For Fintechs, De-fi companies and more<br />
    //              <b> - Academic Data: </b> For Job applications<br />
    //              <b> - Medical Data: </b> For Hospital and Emergency Services 
    //              </p> <br />

    //   <br />
    //   <form className="form-subscribe">
    //     <div>
    //         {/* <label>Subscribe to our newsletter</label> */}
    //     <br/>
    //     </div>
    //     <div className="input-n-btn">
    //         <input
    //         className="input-subscribe"
    //         placeholder="Enter your Email Address" 
    //         />
    //         <button className="btn-subscribe">Subscribe</button>
    //     </div>
    //   </form>
    // </div>
  );
};

export default Qualities;

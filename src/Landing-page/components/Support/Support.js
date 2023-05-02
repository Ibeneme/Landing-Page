import React from "react";
import { Footer } from "../Footer/Footer";
import Logo from '../privacy/images/Rectangwle 4205.png'
import Navbar from "../Navbar/Navbar";

const Support = () => {
  return (
    <div>
      <Navbar />
       <div className='terms-div' >
         <span className='illustartion-header'> 
                  <h1
                    style={{
                    marginTop:'4em',
                    fontWeight: 'bolder'
                  }}>Support and help</h1>

                  <img  src={Logo} alt='illustration'/>
                </span>
                <br />   <br />

           <div className="iframe">
           <iframe
              title="Feedback Form"
              class="freshwidget-embedded-form"
              id="freshwidget-embedded-form"
              src="https://passcoder.freshdesk.com/widgets/feedback_widget/new?&widgetType=embedded&submitTitle=Send"
              height="720px"
          
              width="100%"
              frameborder="0"
            ></iframe>
            </div>  
     
                
  
    </div>  < Footer />
    </div>
   
      
  );
};

export default Support;

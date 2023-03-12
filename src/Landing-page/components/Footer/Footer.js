import React from 'react'
// import Svg from '../Navbar/Vector1.svg';
import {BsTwitter, BsLinkedin} from 'react-icons/bs'
import './Footer.css'
import { FaInstagram } from 'react-icons/fa';

export const Footer = () => {
  return (
    <div className='footer-div' >
      <div className='footer-div-div'>
          {/* <div className='footer-div-div'>
            <img src={Svg} alt="svg"
                className='svg-footer' />
            <h5>Passcoder</h5>
        </div> */}
        <div className='icons-footer'>
           
          
            <a href = 'https://twitter.com/mypasscoder?s=21&t=erSZfsw1YICHUVSyrvH-UQ'>
              <BsTwitter />
            </a>
            <a href = 'https://www.linkedin.com/company/mypasscoder/'>
               <BsLinkedin />
            </a>
            {/* <a href = 'https://www.linkedin.com/company/mypasscoder/'>
               <BsFacebook />
            </a> */}
            <a href = 'https://www.instagram.com/mypasscoder/?igshid=YmMyMTA2M2Y%3D'>
              <FaInstagram />
            </a>
            
        </div>
      </div>
      <br/>
      <br/>
      <h5>Copyright 2023, Passcoder Limited</h5>
      <br />

      <h6>Powered by Prembly</h6>
    </div>
  )
}

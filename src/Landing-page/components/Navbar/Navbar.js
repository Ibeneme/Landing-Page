import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css"
import Svg from "./Vector.svg"


function Navbar() {

	
	
    
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};

	return (
		<header>

      {/* logo in svg */}
      <div>
        <img src={Svg} alt="logo" style={{color:"#292482"}} />
			  <h3 className="h3-for-navbar">Passcoder</h3>
      </div>
			<nav className="nav-bar" ref={navRef}>
			<h6>
				<span className="navbar-signup-button">
					Sign Up
				</span>
			</h6>

				 {/* <h6>Our Service</h6> 
        <div className="div-navbar-signup-button">

			<h6>
				{/* <button 
				className="navbar-signup-button">
					Sign Up
				</button> 
			</h6>

           
        </div>*/}
				<button
            className="nav-btn nav-close-btn"
					  onClick={showNavbar}>
					  <FaTimes />
				</button>
			</nav>
			<button className="nav-btn" onClick={showNavbar}>
				<FaBars />
			</button>
      <button 
	 
	  className="navbar-signup-button-close">Sign Up
      </button>
		</header>
	);
}

export default Navbar;
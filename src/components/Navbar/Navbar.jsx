import React from 'react'
import {NavLink} from 'react-router-dom'
import { CgProfile } from "react-icons/cg";
import { FiShoppingCart } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import './Navbar.css'


const Navbar = () => {
  return (
    <div className='navbar-container'>
        <div className='navbar-logo-container'>
            <img src="https://s3-alpha-sig.figma.com/img/7220/1328/eefc66cd70960daab6449206c3540858?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IZj9rZ8pk0DIPcS2gKzcDeslH6xchJ--XbU~C~owkS5n12psMSHEc5JLnmtBqZj7Vn~PDRKvvfd3LMAAqOLeS8rUSTIaBpqfw1IH~RarF6TEPIpWDQcLG4mPhvhaGl52L0aF7TV5uyRtFDsS3r0eqIy6sM8vBwxGiPHU0NUoV9ryEbIuJz4StnWANiDRBUP5-niwgRODOkPjFHOLb-2mnal4LB9Gz104NjhXPLD4qI-l79aNCrAfVhZAMCsyksp6liOQ5gM1cl-KIp2J0o6gs6SOhmmHmrjz25yGvb9mNGsWoUxa25a6sLeVS4mYChjxGFOL0rsZ-GZ663dYfGLLNg__" alt="" />
            <h1>Chaperone</h1>
        </div>
        <ul className='navbar-list'>
            <NavLink className="navbar-list-item" to="/"><li>Home</li></NavLink>
            <NavLink className="navbar-list-item" to="/plants"><li>Plants & Pots</li></NavLink>
            <NavLink className="navbar-list-item" to="/tools"><li>Tools <IoIosArrowDown /></li></NavLink>
            <NavLink className="navbar-list-item" to="/services"><li>Our Services <IoIosArrowDown /></li></NavLink>
            <NavLink className="navbar-list-item" to="/blog"><li>Blog</li></NavLink>
            <NavLink className="navbar-list-item" to="/story"><li>Our Story</li></NavLink>
            <NavLink className="navbar-list-item" to="/faqs"><li>FAQs</li></NavLink>   
        </ul>
        <div className='navbar-right'>
            <div className='navbar-right-logo-container'>
                <CgProfile size={27}/>
                <p>My Profile</p>
            </div>
            <div className='navbar-right-logo-container'>
                <FiShoppingCart size={27} />
                <p>Cart</p>
            </div>
        </div>
    </div>
  )
}

export default Navbar
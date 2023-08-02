// import { render } from '@testing-library/react'
import React from 'react'
// import ReactDOM from 'react-dom/client'
// import navLinks from './navitems'
import loggo from './images/loggo.png'
import vexin from './images/vexins.png'
function HeroSection() {

    return(
      <header className="container-fluid px-3 px-md-5 p-0 pt-3 ">
        <nav className='d-flex justify-content-between'>
        <div>
            <img src={loggo} alt='Logo' className=''/>
        </div >
        <button className='my-btn2 d-md-none mx-auto btn-sm'>
                            Sponsor a Child 
                        </button>
        <div className='d-none d-lg-flex  align-items-center'>
            <a href='/' className = 'navlink text2 ' style={{fontWeight:'bolder'}}>Home</a>
            <a href='/' className = 'navlink text2 '>About Us</a>
            <a href='/' className = 'navlink text2'>Projects</a>
            <a href='/' className = 'navlink text2'>Impact</a>
            <a href='/' className = 'navlink text2'>Blog</a>
            <a href='/' className = 'navlink text2'>Contact us</a>
        </div>
        </nav>
        
        <div className='hero mt-5  mb-5 pb-2 pb-md-5'>
            <div className='row mt-md-5 pb-md-5'>
                    <div className='col-12 col-lg-6 mt-md-5'>
                        <h1 className='text1' style={{fontSize:'50px'}}>Unlocking <span className='blue-color'>Bright Futures
                            </span>:</h1>
                        <h1 className='text1' style={{fontSize:'50px'}}>Empowering Education For Unprivileged Children</h1>
                        <p className='text2'>
                            We believe in the power of education to transform lives and create a brighter future for every child, regardless of background or circumstances 
                        </p>
                        <button className='my-btn mx-auto'>
                            Sponsor a Child 
                        </button>
                        </div>
                    <div className='col-12 col-lg-6 mt-5 mt-md-0'>
                        <img src={vexin} alt='Children' className='w-100'/>
                    </div>
            </div>

        </div>
       
      </header>
        
    );
  
}
export default HeroSection
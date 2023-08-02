import React from "react";
import laugher from './images/laughter.jpeg'

import note  from './images/notes.png'

import ruler from './images/ruler.png'

import pencil from './images/pencil.png'

function About(){
    return(
        <div className="container-fluid px-3 px-md-5 mt-5">
            <div className="row">
                <div className="col-md-6 col-12 ">
                    <img src={laugher} alt="Three children laughing" className="w-100 "/>
                </div>
                <div className="col-md-6 text2 col-12">
                    <h1 className="text1 text-md-left text-center mt-5" style={{fontSize:'34px'}}>About Us</h1>
                    <p className = "text2">
                        At Brightminds, we are dedicated to bridging the educational gap for unprivileged children, providing them with equal access to quality learning resource and opportunities
                    </p>
                    <p>
                    <img src={note} alt='note' width='20px'/>  &nbsp;Innovative learning programs
                    </p>
                    <p>
                    <img src={ruler} alt='note' width='20px'/> 
                    &nbsp;Personalized support
                    </p>
                    <p>
                    <img src={pencil} alt='note' width='20px'/>  
                    &nbsp;Nuturing community
                    </p>
                    <button className="my-btn "> Read more </button>
                </div>
            </div>

        </div>
    );
}
export default About
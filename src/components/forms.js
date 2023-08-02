import React from "react";
import ruler from './images/ruler.png'
import pencil from './images/pencil.png'


function Form(){
  return(
    <>
    <div className=" px-2 form px-md-5 mx-auto pb-5 mt-md-5 ">
        <form  className="mx-auto text-center pt-2 pt-md-5 mt-md-5" style={{position:'relative'}}>
          <div className="d-flex justify-content-between align-items-center">
            <img src={ruler} alt="ruler" width='100px' className="form-image"/>
            <img src={pencil} alt="pencil" width='100px'  className="form-image" />
            </div>
            <h1 className="text1">Subscribe to our <span className="text-orange">newsletter</span></h1>
            <p className="text2">Get weekly updates and learn more about the work we do. </p>
            <input type="text" name="" className="my-input text2 mx-auto" placeholder="name" />
            <input type="email" name="" className="my-input text2 mx-auto mt-2" placeholder="email address" />
        </form>
    </div>
  <div>

  </div>
</>
  );
}
export default Form;
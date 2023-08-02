import React from 'react'
import note from './images/notes.png'
import pencil from './images/pencil.png'
import ruler from './images/ruler.png'

function ShowContent(){
   
    return(
    <>
    <div className='container-fluid px-3 px-md-5'>
        <div className='row mt-md-2'>
            <div className='col-md-4 col-12 mt-md-2 mt-5 mb-5'>
                <div className='blue-box'>
                    <img src={note} alt='note' width='70px' className='image'/>
                    <h3 className='text1'  style={{fontSize:'26px'}}>Project Statement</h3>
                    <p className='text2 statement'>
                        Lack of equal educational opportunities hinders the potential of underprivileged children, perpetuating cycles of poverty and inequality.
                    </p>
                </div>
            </div>
            <div className='col-md-4 mt-5 mt-md-2 mb-5 col-12'>
                <div className='blue-box'>
                <img src={ruler} alt='pencil' width='70px' className='image'/>
                <h3 className='text1'  style={{fontSize:'26px'}}>Mission Statement</h3>
                <p className='text2 statement'>
                       Empowering underprivileged children through education, bridging the gap, and transforming lives for a brighter future.
                    </p>
                </div>
            </div>
            <div className='col-md-4 col-12 mt-5 mt-md-2 mb-5 col-12'>
                <div className='blue-box'>
                <img src={pencil} alt='ruler' width='70px' className='image'/>
                <h3 className='text1' style={{fontSize:'26px'}}>Vision Statement</h3>
                <p className='text2 statement'>
                      A world where all children have equal access to quality education, empowering them to reach their full potential.
                    </p>
                    <p></p>
                </div>
            </div>
        </div>
    </div>
    </>
        
    );
}
export default ShowContent;
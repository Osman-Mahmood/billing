import React from 'react'
import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <div className='bg_clr' style={{height:"100vh"}}>
 <div className='container pt-5 pb-5 p-5' >
      <div className='row align-items-center'>
        <div className='col-lg-6'>
LOGO
        </div>
       
        <div className='col-lg-4'>
            <div className='d-flex gap-3'>
            <NavLink to="billing" className="text-decoration-none w-100">
                <div className='col-lg-8 text-dark box'>
                    <h5>Click Me</h5>
                    <h6>Bill</h6>
                </div>
                </NavLink>
               
                {/* <NavLink to="billing" className="text-decoration-none w-100">
                <div className='col-lg-10 text-dark box'>
                    <h5>Click Me</h5>
                    <h6>Bill</h6>
                </div>
                </NavLink> */}
            </div>
            <div className='d-flex gap-3'>
            <NavLink to="invoice" className="text-decoration-none w-100">
            <div className='col-lg-8 text-dark box'>
                    <h5>Click Me</h5>
                    <h6>Invoice</h6>
                </div>
            </NavLink>
                
                {/* <div className='col-lg-4 text-dark box'>
                    <h5>image</h5>
                    <h6>Bill</h6>
                </div> */}
            </div>
            <div className='d-flex gap-3'>
                <div className='col-lg-4 text-dark box'>
                    <h5>image</h5>
                    <h6>Bill</h6>
                </div>
                <div className='col-lg-4 text-dark box'>
                    <h5>image</h5>
                    <h6>Bill</h6>
                </div>
            </div>
            <div className='d-flex gap-3'>
                <div className='col-lg-4 text-dark box'>
                    <h5>image</h5>
                    <h6>Bill</h6>
                </div>
                <div className='col-lg-4 text-dark box'>
                    <h5>image</h5>
                    <h6>Bill</h6>
                </div>
            </div>
            <div className='d-flex gap-3'>
                <div className='col-lg-4 text-dark box'>
                    <h5>image</h5>
                    <h6>Bill</h6>
                </div>
                <div className='col-lg-4 text-dark box'>
                    <h5>image</h5>
                    <h6>Bill</h6>
                </div>
            </div>
            
            </div>
      </div>
    </div>
    </div>
   
  )
}

export default Home

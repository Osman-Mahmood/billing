import React from 'react'
import TablesBilling from './TablesBilling'

const BillingBottom = () => {
  return (
    <div className='container mb-5 bg p-3'>
   
      <div className='row justify-content-center align-items-center'>
        <div className='col-lg-12 align-items-center'>
      

<form>  
<div class = "row justify-content-center align-items-center text-start ">  
<div class = "col-lg-6 lables">  
<label for = "uname" className='fw-bold'> Total Income Tax </label>  
<input type = "text" class = "form-control height" id = "uname" placeholder = "Enter student name" name = "sname" />  
</div>  
<div class = "col-lg-6 lables">  
<label for = "pswd" className='fw-bold'> Total GST </label>  
<input type = "password" class = "form-control height" id = "pswd" placeholder = "Enter student password" name = "pswd " />  
</div>  
</div>  
</form>  
        </div>
      </div>
      <div className='row mt-3 justify-content-center align-items-center'>
        <div className='col-lg-12 align-items-center'>
      

<form>  
<div class = "row justify-content-center align-items-center text-start">  
<div class = "col-lg-6">  
<label for = "uname" className='fw-bold'> Total Account (Excluding Tax) </label>  
<input type = "text" class = "form-control height" id = "uname" placeholder = "Enter student name" name = "sname" />  
</div>  
<div class = "col-lg-6">  
<label for = "pswd" className='fw-bold'> Total Amount </label>  
<input type = "password" class = "form-control height" id = "pswd" placeholder = "Enter student password" name = "pswd " />  
</div>  
  
</div>  
</form>  
{/* <TablesBilling /> */}
        </div>
      </div>
    </div>
  )
}

export default BillingBottom

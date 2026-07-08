




import React, { useState } from 'react'

export default function Register() {

    const[formData,setFormData]=useState({
        name:"",
        email:"",
        password:"",
        course:"",
        skills:"",
        role:"student"
    })
    console.log(formData);

    const handleChange=(e)=>{
       setFormData({
        ...formData,
        [e.target.name]:e.target.value,
       })
    }

    const validateForm=()=>{
        if(!formData.name.trim()){
          alert("please provide name");
        }

        if(!formData.email.trim()){
          alert("Please provide email");
        }

        if(!formData.password.trim()){
          alert("Please provide password");
        }
         if(!formData.skills.trim()){
          alert("Please provide skills");
        }
    }

    const handleSubmit=function(e){
        e.preventDefault(); // prevents reloading
        if(!validateForm()){
          return;
        }else{
           alert("Form submitted successfully")
        }
       
    }

  return (
    <>
      <div className='min-h-screen bg-gay-100 py-10 px-5 '>
        <div className='max-w-6xl mx-auto grid md:grid-cols-2 gap-10 '>
            {/* Registration Form  */}
            <div className='bg-white shadow-lg rounded-xl p-8'>
                <h1 className='text-3xl font-bold text-center text-blue-600 mb-8'>Student Registration Form</h1>
                <form className='space-y-5' onSubmit={handleSubmit}>
                    <label className='block mb-2 font-semibold'>Full Name</label>
                    <input type="text" 
                    placeholder='Enter your name'
                    value={formData.name}
                    name="name"
                    onChange={handleChange}
                    className='w-full' border rounded-lg p-3 focus:ring-2 focus:ring-blue-200 outline-none
                    />
                    <label className='block mb-2 font-semibold'>Email</label>
                    <input type="email" 
                    placeholder='Enter your Email'
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                    className='w-full' border rounded-lg p-3 focus:ring-2 focus:ring-blue-200 outline-none
                    />
                    <label className='block mb-2 font-semibold'>Password</label>
                    <input type="password" 
                    placeholder='Enter your password'
                    name='password'
                    value={formData.password}
                    onChange={handleChange}
                    className='w-full' border rounded-lg p-3 focus:ring-2 focus:ring-blue-200 outline-none
                    />
                    <label className='block mb-2 font-semibold'>Skills</label>
                    <input type="text" 
                    placeholder='Nodejs Springboot java'
                    name='skills'
                    value={formData.skills}
                    onChange={handleChange}
                    className='w-full' border rounded-lg p-3 focus:ring-2 focus:ring-blue-200 outline-none
                    />
                    <label className='block mb-2 font-semibold'>Role</label>
                    <input type="text" 
                    // placeholder='E'
                    value={formData.role}
                    onChange={handleChange}
                    className='w-full' border rounded-lg p-3 focus:ring-2 focus:ring-blue-200 outline-none
                    />
                    <button type='submit'
                    className='bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700'>Submit</button>
                </form>

            </div>
            {/* Live Preview  */}
            <div className='bg-white shadow-lg rounded-xl p-8'>
               <h2 className='text-3xl font-bold text-center text-blue-600 mb-8'>Live Preview</h2>
               <div className='space-y-4 text-lg' >
               <p><strong>Name:</strong>{formData.name}</p>
               <p><strong>Email:</strong>{formData.email}</p>
               <p><strong>password:</strong>{formData.password}</p>
               <p><strong>course:</strong>{formData.course}</p>
               <p><strong>skills:</strong>{formData.skills}</p>
               <p><strong>role:</strong>{formData.role}</p>
               </div>
            </div>
        </div>

      </div>
    </>
  )
}

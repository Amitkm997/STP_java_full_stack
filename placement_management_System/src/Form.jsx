import React, { useState } from 'react'

export default function Form() {
    const[name,setName]=useState("");
    const[email,setEmail]=useState("");
    console.log(name)
  return (
    <>
       <label htmlFor="">Name</label>
       <input type="text" 
       value={name}
       onChange={(e)=>setName(e.target.value)}/>

       <label htmlFor="">Email</label>
       <input type="email" 
       value={email}
       onChange={(e)=>setEmail(e.target.value)}/>

       <h2>Live preview</h2>
       <p>Name:{name}</p>
       <p>Email:{email}</p>
    </>
  )
}

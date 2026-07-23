import Student from "../models/student.js"
import bcrypt from 'bcrypt'
const emailRegex=/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/
const passwordRegex=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&^#])[A-Za-z\d@$!%*?&^#]{8,20}$/

export const register=async(req,res)=>{
     try{
    const{name,email,password,course,skills,role}=req.body;

    if(!name){
        return res.status(400).json({
            message:"Please Provide name"
        })
    }

    if(!email){
        return res.status(400).json({
            message:"Please provide email"
        })
    }
    
    if(!emailRegex.test(email)){
        return res.status(400).json({
            message:"Invalid Email"
        })
    }
    
    if(!password){
        return res.status(400).json({
            message:"Please provide password"
        })
    }

    if(!passwordRegex.test(password)){
        return res.status(400).json({
            message:
            `
             Password must contail all these parameter:

            Contains at least one lowercase letter
            Contains at least one uppercase letter
            Contains at least one digit
            Contains at least one special character
            Is between 8 and 20 characters long
            `
        })
    }
   
    let hashedPassword=await bcrypt.hash(password,10);

    const existStudent=await Student.findOne({email})

    if(existStudent){
        return res.status(400).json({
            message:"User already registered you can directly login"
        })
    }

    const student=await Student.create({
        name,
        email,
        password:hashedPassword,
        course,
        skills,
        role
    })

     return res.status(201).json({
            success:true,
            message:"User Registered Successfully",
            student:student
        })
    
    }catch(error){
        return res.status(500).json({
            success:false,
            message:error.message
        })
    }
}

export const login=(req,res)=>{
    
    res.send("Student Logged in successfull......")
}
import React from 'react'
import CompanyCard from '../CompanyCard'
export default function Company() {
   const companies=[
    {
      id:1,
      companyName:"Microsoft",
      salaryPackage:"45 LPA",
      location:"Banglore",
      role:"Backend Developer"
    },
    {
      id:2,
      companyName:"Amazon",
      salaryPackage:"90 LPA",
      location:"Noida",
      role:"Software Enginner"
    },
    {
      id:3,
      companyName:"Google",
      salaryPackage:"1 Cr",
      location:"USA",
      role:"MERN Stck Develper"
    },
    {
       id:4,
      companyName:"Flipkart",
      salaryPackage:"50 LPA",
      location:"Hydarabad",
      role:"DevOps Engineer"
    },
    {
      id:5,
      companyName:"Capgemini",
      salaryPackage:"5 LPA",
      location:"Chennai",
      role:"Data Science"
    },
    {
      id:6,
      companyName:"TCS",
      salaryPackage:"15 LPA",
      location:"Delhi",
      role:"Data Analyst"
    }
  ]
  return (
     <section className='bg-gray-100 py-16'>
         {/* Top Hiring Comapanies  */}
            <div className='max-w-7xl mx-auto px-6'>
              <h2 className='text-3xl font-bold text-center mb-10'>Top Hiring Comanies</h2>
              <div className='grid md:grid-cols-3 gap-6'>
                {/* <CompanyCard name="Google" role="Software Enginner" salaryPackage="18 LPA" />
                <CompanyCard name="Google" role="Software Enginner" salaryPackage="18 LPA" />
                <CompanyCard name="Google" role="Software Enginner" salaryPackage="18 LPA" /> */}
                {companies.map((cur)=>{
                   return <CompanyCard key={cur._id}  id={cur._id} name={cur.companyName} role={cur.role} salaryPackage={cur.salaryPackage}/>
                })}
              </div>
    
            </div>
           </section>
  )
}

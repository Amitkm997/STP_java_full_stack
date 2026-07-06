import React from 'react'
import CompanyCard from '../CompanyCard'
export default function Company() {
   const companies=[
    {
      id:1,
      companyName:"Microsoft",
      salaryPackage:"45 LPA",
      location:"Banglore"
    },
    {
      id:2,
      companyName:"Amazon",
      salaryPackage:"90 LPA",
      location:"Noida" 
    },
    {
      id:3,
      companyName:"Google",
      salaryPackage:"1 Cr",
      location:"USA"
    },
    {
       id:4,
      companyName:"Flipkart",
      salaryPackage:"50 LPA",
      location:"Hydarabad"
    },
    {
      id:5,
      companyName:"Capgemini",
      salaryPackage:"5 LPA",
      location:"Chennai"
    }
  ]
  return (
    <div>
       {
          companies.map((cur)=><CompanyCard key={cur.id} companyName={cur.companyName} salaryPackage={cur.salaryPackage} location={cur.location}/>)
       }
    </div>
  )
}

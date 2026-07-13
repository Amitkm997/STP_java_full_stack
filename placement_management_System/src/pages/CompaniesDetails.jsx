import React from 'react'

import { companies } from './Companies';
// export const companies=[
//     {
//       id:1,
//       companyName:"Microsoft",
//       salaryPackage:"45 LPA",
//       location:"Banglore",
//       role:"Backend Developer"
//     },
//     {
//       id:2,
//       companyName:"Amazon",
//       salaryPackage:"90 LPA",
//       location:"Noida",
//       role:"Software Enginner"
//     },
//     {
//       id:3,
//       companyName:"Google",
//       salaryPackage:"1 Cr",
//       location:"USA",
//       role:"MERN Stck Develper"
//     },
//     {
//        id:4,
//       companyName:"Flipkart",
//       salaryPackage:"50 LPA",
//       location:"Hydarabad",
//       role:"DevOps Engineer"
//     },
//     {
//       id:5,
//       companyName:"Capgemini",
//       salaryPackage:"5 LPA",
//       location:"Chennai",
//       role:"Data Science"
//     },
//     {
//       id:6,
//       companyName:"TCS",
//       salaryPackage:"15 LPA",
//       location:"Delhi",
//       role:"Data Analyst"
//     }
//   ]

import { useParams } from 'react-router-dom'
export default function CompaniesDetails() {
    const{id}=useParams();
    console.log(id);

    const company=companies.find((item)=>item.id==id);
    console.log(company)
  return (
    <div>
      <h1>Company details</h1>
      <h3>{company.companyName}</h3>
    </div>
  )
}

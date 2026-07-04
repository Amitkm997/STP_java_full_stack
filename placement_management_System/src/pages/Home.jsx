import React from 'react'
import CompanyCard from './CompanyCard'
export default function Home() {
  return (
    <div>
       {/* <CompanyCard></CompanyCard> */}
       <CompanyCard companyName="Microsoft" salaryPackage="45 LPA" location="Banglore"/>
       <CompanyCard companyName="Flipkart" salaryPackage="23 LPA" location="Noida"/>
       <CompanyCard companyName="Amazon" salaryPackage="1 cr" location="Gurgaon"/>
    </div>
  )
}

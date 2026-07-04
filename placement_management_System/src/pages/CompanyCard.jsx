

function CompanyCard({companyName,salaryPackage,location}){
    // console.log(props)
    // const{companyName,salaryPackage,location}=props
    
    return(
        <>
           <h3 className="bg-white">{companyName}</h3>
           <p>package:{salaryPackage}</p>
           <p>location:{location}</p>
        </>
    )
}

export default CompanyCard;



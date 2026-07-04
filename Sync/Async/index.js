

//synchronous/blocking  -> every line waits for its previous line to be fully executed;
// console.log("First line");
// console.log("second line");
// // de opertaion 5 min
// console.log("third line");
// console.log("forth line");


// asynchrous / non-blocking

// console.log("first line");

// setTimeout(()=>{
//     console.log("second line")
// },2000)

// console.log("Third line")

// function fetchData(){
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//             console.log("Data fetched successfully");
//         },2000);
//     })
// }

// async function getData(){
//     try{
//         let data=await fetchData();
//      console.log(data);
//     }catch(eror){
//         console.log(eror);
//     }
    
// }

// getData();


// fetch('https://jsonplaceholder.typicode.com/users').
// then((data)=>data.json()).
// then((res)=>console.log(res))


// async function fetchData(){
//     let data = await fetch('https://jsonplaceholder.typicode.com/users');
//     let resData=await data.json();
//     console.log(resData);
// }

// fetchData();
// HOF-> Higher order functions 

// function greet(callback){ // 
//      return callback;
// }

// greet(welcome)

// function welcome(){
//     return  "This is welcome function"
// }

// greet-> Hof 
// welcome-> callback

// let ar=[23,22,56,75,33,89];
// [0,22,112,....]

// for(let i=0;i<ar.length;i++){
//     ar[i]=ar[i]*i;
// }

// console.log(ar);
// arrayName.function()

// let newArray=ar.map((cur,index)=>cur*index);

// console.log(newArray)




// let students = [
//     "Amit",
//     "Rahul",
//     "Priya"
// ];

// let capital=students.map((cur)=>cur.toUpperCase());
// console.log(capital)

// let ar=[23,22,56,75,33,89];

// // filter -> 

// let odd=ar.filter((cur)=>cur%2!=0);

// console.log(odd);

// let ar=[23,22,56,75,33,89];

// multiply each element by 2 in the array that is even

// Vishal Meena
// let arr=[23,22,56,75,33,89];

// let evenNumbers = arr.filter(num => num % 2 === 0);

// console.log(evenNumbers); // Output: [22, 56]

// let multipliedEven = evenNumbers.map(num => num * 2);

// console.log(multipliedEven); //Output: [44,112]

//taksh
// let ar = [13, 22, 56, 75, 33, 89];

// let result = ar
//   .filter(num => num % 2 === 0)
//   .map(num => num * 2);

// console.log(result);

//naina
// let arr=[23,22,56,75,33,89];
// let even = arr.filter(num => num % 2 === 0);
// let mul = evenNumbers.map(num => num * 2);



// let ar=[23,22,56,75,33,89];

// let even=ar.filter((cur)=>cur%2==0).map((cur)=>cur*2);

// console.log(even)

// reduce

// let ar=[23,22,56,75,33,89];
// let sum=0;
// for(let i=0;i<arr.length;i++){
//     sum += arr[i]
// }

// console.log(sum)

// let sum=ar.reduce((acc,cur)=>acc+cur,0);
// console.log(sum)

// acc=0, cur=23
// acc=23, cur22
// acc=47, cur56.........

// let ar=[
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ]
// // sum of all the element in the array 

// let sum=ar.map((cur)=>cur.reduce((acc,cur)=>acc+cur,0)).reduce((acc,cur)=>acc+cur,0);

// console.log(sum)

// let sum=ar.reduce((acc,cur)=>acc+cur.reduce((ac,cr)=>ac+cr,0),0)
// // sum of all the element in the array 

// let sum=ar.map((cur)=>cur.reduce((acc,cur)=>acc+cur,0)).reduce((acc,cur)=>acc+cur,0);

// console.log(sum)


// let name="Amit";
// let age=24;

// console.log("My name is "+name+" and my age is "+age);

// //tempelate literals

// console.log(`My name is ${name} and age is ${age}`);


// let student=["Amit","Vishal","Naina"];

// console.log(student[1]);
// console.log(student[2]);

// let student1=student[0]
// let student2=student[1]
// let student3=student[2]
// console.log(student1)



//  let student=["Amit","Vishal","Naina"];

//  const[s1,s2,s3]=student

//  console.log(s3);




// let student={
//     name:"Vishal",
//     age:22,
//     profession:"Full Stack developer"
// }

// const{name,age,profession}=student;
// console.log(profession)
// console.log(student.profession)
// console.log(student["name"])
// console.log(student.name)
// console.log(student.age)

// let allstudent={
//     student1:{
//         name:"naina",
//         profession:"Full Stack Developer"
//     }
// }

// const{student1}=allstudent;

// const{name,profession}=student1
// console.log(name)


// let student=["Amit","Vishal","Naina"];

// // student.push("kuch_bhi")
// // student.push("kuch_bhi1")
// // student.push("kuch_bhi2")
// // console.log(student)

// let allstudent=[...student,"abc","def"]

// console.log(allstudent)

// let ar1=[2,454,65,6];
// let ar2=[78,65,345,7,6];
// let mergedArray=[...ar1,...ar2]
// console.log(mergedArray)

// ...arrayVariableName

// function number(...numbers){
//     let sum=0;
//     for(let i=0;i<numbers.length;i++){
//         sum += numbers[i];
//     }
//     return sum;
// }

// console.log(number(4,5,5,6,45,30,67,98));

// let ar=[
//    4,  5,  5,  6,
//   45, 30, 67, 98
// ]

// const[a,b,c,...d]=ar;

// console.log(d);
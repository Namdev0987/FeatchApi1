// // const data = fetch("https://jsonplaceholder.typicode.com/users")
// //   .then((response) =>
// //     console
// //       .log(response.json())

// //       .then((data) => console.log(data))
// //   )
// //   .catch(() => console.log("somthinng  went wrong!"));
// // // console.log(data);
// // let button = document.querySelector("button");
// // let ul = document.querySelector('ul');

// const fetchUser = async () => {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     // console.log(response);
//     const User = await response.json();
//     // console.log(data);
//     // User.forEach((user) => (user.name));
//     User.forEach((user) => {
//         let li = document.createElement("li");
//         li.className = "list-group-item";
//         li.innerText = user.name ;
//         ul.appendChild(li);
//     })
// }

// button.addEventListener("click", fetchUser)
// fetchUser();

// Todays Practice
// let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const printNumbers = () => {
//   setTimeout(() => {
//     number.forEach((num) => console.log(num));
//   }, 1000);
// };

// // printNumbers();

// const addNubmers = (num) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       number.push(num);
//       let err = false;
//       if (err) {
//         reject("Promise rejected!");
//       } else {
//         resolve();
//       }
//     }, 1500);
//   });
// };

// const WorkDone = () => {
//   setTimeout(() => {
//     console.log("have a nice day!");
//   }, 2000);
// };

// const Printerror = () => {
//   console.log("somthing went wrong!");
// };

// // addNubmers(11,addNubmers);
// // printNumbers();
// // WorkDone();
// // Printerror();

// // const res = addNubmers(6);
// // console.log(res);
// // addNubmers(6).then(printNumbers).then(WorkDone).catch(Printerror);

// async function init() {
//   try {
//     await addNubmers(899);
//     printNumbers();
//     WorkDone();
//   } catch (error) {
//     Printerror();
//   }
// }

// init();

// let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const printNumbers = () => {
//   setTimeout(() => {
//     number.forEach((num) => {
//       console.log(num);
//     });
//   }, 1000);
// };

// const addNumber = (num) => {
//     return new Promise((resolve, reject) =>{
//         setTimeout(() => {
//             number.push(num);
//             let err = true;
//             if(!err){
//                 reject("Promise rejected!")
//             }else{
//                 resolve();
//             }
//         }, 1500);        
//     });
// };

// const Workdone = () => {
//     setTimeout(() => {
//     console.log("Wokr Done!!!!");
//   }, 2000);
// };

// const printErr = () => {
//   console.log("Somthing went Wrong!!!!");
// };

// // addNumber(11);
// // printNumbers();
// // Workdone();
// // const res = console.log(addNumber(11));

// // addNumber(6).then(printNumbers).catch(printErr);
// // addNumber(11).then(printNumbers).then(Workdone).catch(printErr);

// const  init = async() =>{
//    try {
//     await addNumber(89);
//     printNumbers();
//     Workdone();
//    } catch (error) {
//     printErr();
//     // console.log(error);
//    }
// }

// init();
// =====================================================

// const data = fetch("https://jsonplaceholder.typicode.com/todos");
// console.log(data);

// fetch("https://jsonplaceholder.typicode.com/todos")
// .then((response) => response.json())
// .then((data) => console.log(data))
// .catch(() => console.log("Somthing went wrong!"));

let button = document.querySelector("button");
let ul = document.querySelector("ul");

const fetchUser = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const Users = await response.json();
    Users.forEach((user) =>{
        let li = document.createElement("li");
        li.className= "list-group-item";
        li.innerText = user.title;
        ul.appendChild(li);
    });
   
}

button.addEventListener("click",fetchUser)


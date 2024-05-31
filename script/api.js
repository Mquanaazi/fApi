// //distructuring
// //for objects
// let person ={
//     age:40,
//     name :'bob',
// }
// //destructuring
// let {name,age}=person
// // let {age} =person
// console.log(name,age);

// // //normal object dot notation
// // let age=person.age

// //for arrays
// let people =['bob','john','garth']
// let [first ,second,third]=people
// let [a,b,c] = people//indexing as family
// console.log(c);

// let result
// async function fetchData() {
//     //promise
//     let data= await fetch('https://randomuser.me/api?results=100')
//     let convertedData = await data.json()// converts the data.if using async and await, you must declare the variable.
//    console.log(convertedData.results); 

   //alt//

//alt way to avoid too much typing,using object destructuring
//let data= await fetch('https://randomuser.me/api?results=100')
// let {results} = await data.json()// converts the data.if using async and await, you must declare the variable.

//alt//

//alt way to avoid too much typing,using object destructuring//shorter shortcut 
let result
async function fetchData() { 
let {results}= await (await fetch('https://randomuser.me/api?results=10')).json()
result=results
console.log(results); 

writeData()

}
fetchData()

let tbody=document.querySelector('tbody')
function writeData() {
    result.forEach(item=>{
        tbody.innerHTML +=  `
                            <tr>
                                <td>${item.id.value}</td>
                                <td>${item.name.first}</td>
                                <td>${item.name.last}</td>
                                <td>${item.location.city}</td>
                                <td><img src="${item.picture.large}" alt="picture"></td>
                                <td>${item.registered.age}</td>
                                <td>${item.registered.date}</td>
                            </tr>
                            `
        //callback function//function passed as an argument

    })
}
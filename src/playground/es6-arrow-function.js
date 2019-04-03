// function square(x) {
//     return x * x;
// }


// // const squareArrow = (x) => {
// //     return x * x;
// // }

// const squareArrow = (x) => x * x;

// console.log(square(6));
// console.log(squareArrow(6));


// Chanllenge - Use arrow function 
// getFirstName
const getFirstNameLong = (fullName) => {
    return fullName.split(" ")[0];
}

const getFirstName = (fullName) => fullName.split(' ')[0];
console.log(getFirstName('Iohan Camargo'));
console.log(getFirstNameLong('Iohan Camargo'));
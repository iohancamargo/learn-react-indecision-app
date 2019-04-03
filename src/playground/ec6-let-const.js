var name = "iohan";

name = 'robert';

let nameLet = "let Iohan";
nameLet = 'aaaaa';

console.log("name",name);
console.log("nameLet",nameLet);

const nameConst = "ConstName";
console.log("nameConst",nameConst);

// Block scope

const fullName = "Iohan Camargo";
let firstName;

if(fullName){
    firstName = fullName.split(' ')[0];
    console.log(firstName);    
}
console.log(firstName);
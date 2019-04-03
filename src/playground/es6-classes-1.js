class Person{

    constructor(name= 'anonymous',age = 0){
        // console.log('teste');
        // this.name = name || 'test';
        this.age = age;
        this.name = name;
    }

    getGretting(){
        // return 'Hi I am ' + this.name + '!';
        return `Hi I am ${this.name}!`;
    }

    getDescription(){
        return `${this.name} is ${this.age} years odl.`;
    }

}

class Student extends Person{

    constructor(name,age,major){
        super(name,age);
        this.major = major;
    }

    hasMajor(){
        return !!this.major;
    }

    getDescription(){
        let description = super.getDescription();

        if(this.hasMajor()){
            description += ` Their major is ${this.major}`;
        }

        return description;
    }

}

// homeLocation, Im visiting from 

class Travel extends Person{

    constructor(name,age,homeLocation){
        super(name,age);
        this.homeLocation = homeLocation;
    }

    hasHomeLocation(){
        return !!this.homeLocation;
    }

    getDescription(){
        let description = super.getDescription();

        if(this.hasHomeLocation()){
            description += ` Im visiting from ${this.homeLocation}`;
        }
        return description;
    }

    getGretting(){
        let description = super.getGretting();

        if(this.hasHomeLocation()){
            description += ` Im visiting from ${this.homeLocation}`;
        }
        return description;
    }

}

const me = new Person('iohan',10);
const other = new Person();

const stuOne = new Student('iohan',10,'Analista de sistemas');
const stuTwo = new Student();

const travelOne = new Travel('iohan',10,'Ponta Grossa');
const travelTwo = new Travel();

// console.log(stuOne.hasMajor());
// console.log(stuTwo.hasMajor());
// console.log(stuOne.getDescription());
// console.log(stuTwo.getDescription());
console.log(travelOne.getGretting());
console.log(travelTwo.getGretting());

// console.log(me.getGretting());
// console.log(other.getGretting());

// console.log(me.getDescription());
// console.log(other.getDescription());
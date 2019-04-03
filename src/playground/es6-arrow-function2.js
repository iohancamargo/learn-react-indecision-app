// Arguments object - no longer bound with arrow function

const add = (a,b) => {
    // console.log(arguments)
    return parseInt(a) + parseInt(b);
}
console.log(add(55,1));
// this keyword - no longer bound

const user = {
    name: 'Iohan',
    cities: ['Philadelphia', 'New Tork', 'Dublin'],
    // printPlacesLived: function (){
    //     // const that = this;
    //     // console.log(this.name);
    //     // this.cities.forEach(function(city) {
    //     //     console.log(that.name + ' has lived in ' + city);// this.name undefined
    //     // });
        
    //     console.log(this.name);
    //     this.cities.forEach((city) => {
    //         console.log(this.name + ' has lived in ' + city);// this.name undefined
    //     });
    // }
    printPlacesLived(){
        
        // const cityMessages = this.cities.map((city) => {
        //     // return city + '!';
        //     return this.name + ' has lived' + city + '!';
        // });
        const cityMessages = this.cities.map((city) =>  this.name + ' has lived' + city + '!');
        

       return cityMessages;
    }
};

// user.printPlacesLived();
console.log(user.printPlacesLived());


// Chanllange area

const multiplier = {
    // array of numbers 
    // multiplyBy - single number
    // multiply - return a new array where the number have been multipli
    numbers: [3,6,9],
    multiplyBy: 2,
    multiplier() {
        const multi = this.numbers.map((numb) => this.multiplyBy * numb);
        return multi;
    }
}
console.log(multiplier.multiplier());
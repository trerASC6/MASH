let Home = [process.argv[2], "Mansion","Apartment","Shack","House"];
let userInput2 = process.argv[3]
let childrenCount = Math.floor(Math.random()*100)
let halfChance = Math.floor(Math.random()*2)
let Car = [process.argv[4], "Lambo", "Tesla", "Toyota", "Station Wagan", "Cardboard Box", "Dexter's Mom"];
let Spouse = [process.argv[5], "Karen", "Treesh", "Gertrude", "Frank", "Victoria"];
let Salary = [process.argv[6], "$100,000", "-$1,000,000", "$1", "$0.01"];
function mash() {
    return "You will live in a " + getHome() + ", and you will have " +getChildrenCount() + " kids! " + "You will drive around in a " + getCar() + "!" + " You will be married to " + getSpouse() + "!";
}
console.log(mash());
////////////////////////////////////////////



function getHome() {
    const h = Home[Math.floor(Math.random()*Home.length)];
    return h;
}
console.log(getHome());
////////////////////////////////////////

function getChildrenCount() {
    if(halfChance == 0){
    return (userInput2)
}
    else if(halfChance == 1){
    return (childrenCount) 
}};

function getCar() {
    const c = Car[Math.floor(Math.random()*Car.length)];
    return c; 
}
console.log(getCar());

function getSpouse() {
    const s = Spouse[Math.floor(Math.random()*Spouse.length)];
    return s; 
}
console.log(getSpouse());

function getSalary() {
    const sa = Salary[Math.floor(Math.random()*Salary.length)];
    return sa; 
}
console.log(getSalary());
let personList = `First_Name:John`;

let regexpNames =  /First_Name:(?:John)/g;
const match = personList.match(regexpNames)
console.log(match)

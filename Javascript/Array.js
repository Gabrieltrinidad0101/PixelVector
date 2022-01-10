//global array
const array = [1,2,3,4,5]


//includes
//check if this value is in array and return true if value exist or false if no exist
console.log('includes: ',array.includes(3))

//filter
//create the new array with only value complete the codition
console.log('filter: ',array.filter((number)=> number > 2))


//reducer
//reduce the array to a single value
console.log('reduce: ',array.reduce((all,value)=>all + value));

//some
//check if any element complete condition and return true if is correct or false if the condition is false
console.log('some: ',array.some((num)=> num > 0)) //true
//console.log('some: ',array.some((num)=> num > 4)) //true
//console.log('some: ',array.some((num)=> num > 5)) //false

//every()
//check if all the elemet complete the condition and return true if is correct or false if the condition is false
console.log('every: ',array.every((num)=>num > 0));
//console.log('every: ',array.every((num)=>num > 1));  false


//sort
//put the number and letter element in orden
console.log('sort: ',array.sort());
//console.log('sort: ',array.sort((a,b)=>a>b?-1:1)); //you can use a function   

//Array.from
// make the new array with the object itarable
console.log(Array.from([1,2,3],x=> x + x));

//use forEach

/* var a = [1,2,3]
b = []
a.forEach(x=>b.push(x+x));
console.log(b) */

//of
//create to new array
const nums = Array.of(1,2,3,5);
console.log("Array.of ",nums)

//flat 
//take the sub-array the a array and return the new array
const arrayFlat = [[1,[1,4,[1,2]]]]
console.log('1 ',...arrayFlat);
console.log('2 ',arrayFlat.flat());

//Flatmap
// is combination between flat and map
var ArrayFlatMap = [1,2,3,4,5,6,7,[8,[9,[9.5]]],[10]]
const newArrayFlatMap = ArrayFlatMap.flatMap(items => items);
console.log("FlatMap",newArrayFlatMap);


//lunes 19
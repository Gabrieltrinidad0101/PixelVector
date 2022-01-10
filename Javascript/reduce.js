/* const numbers = [1,4,6,70,100]
const res = numbers.reduce((acc,item)=>{
    return Math.max(acc,item)
})
console.log(res) */

/* const big = (...datos) =>{
    return datos.reduce((acc,item)=>Math.max(acc,item),0)
}
console.log(big(1,30,50,90,100)); */

/* const objs = [
    {nombre: 'juan',edad:15},
    {nombre: 'juan',edad:15}
]
const res = objs.reduce((acc,item)=>{
    return acc += item.edad
},0)
console.log(res); */


/* const strings = ['mi','nombre','es','Marcos']
const res = strings.reduce((acc,item)=>{
    return acc += " " +item 
},"Hola! ")
console.log(res);
 */

/* const numbers = [1,2,3,4,6]


const res = numbers.reduce((acc,item,index,arr)=>{
    return acc + item
},10);
console.log(res); */
const a = [1,2,3,4,5,6,100]
/* const higher_to_lower = array =>array.reduce((acc,item)=>acc > item ? acc : item)

console.log(higher_to_lower(a))

const Delete = (...data) => data.reduce((acc,item)=>{
    if(item){
        acc.push(item)
    }
    return acc
})

console.log(Delete(1,0,false,NaN));


const b = [[1,2,[1,1],3],[1,2,3,[]]]
const flatten = datos=> datos.reduce((acc,el)=>acc.concat(el),[])
console.log(flatten(b)); */


const c = Array.sort(a) 
console.log(c.sort());
const dead = new Promise(res=>{
    setTimeout(()=>{
        console.log("hola mundo")
        res("bye")
    },3000)
})

dead.then(res => console.log(res))




/* let a = 10
let b = "qwee"
let c = null
const promesas = ms => new Promise((res,rej)=>{
    data = 'data'
    if(data !== null) return setTimeout(res(data),ms)
    rej('error')
});

async function main(){
    try{
        const a = await promesas(1000)
        console.log(a)
    }catch(error){
        console.log(error)
    }
}

main() */












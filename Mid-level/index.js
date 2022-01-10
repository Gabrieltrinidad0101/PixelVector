/* let pet;
if(window.XMLHttpRequest){
    pet = new XMLHttpRequest();
}else{
    pet = new ActiveXObject("Microsoft.XMLHTTP")
}



pet.addEventListener("load",()=>{
    let resp = pet.response 
    console.log(JSON.parse(resp))
});

pet.open("Get","index.txt")
pet.send()
console.log(pet) */



const text = document.getElementById("text")
const send = document.getElementById("send")
const div = document.getElementById("div")


send.addEventListener("click",()=>{
    console.log(text.value)
    fetch("https://reqres.in/api/users",{
        method: "POST",
        body: `{"nombre": "${text.value}"}`,
        headers: {"Content-type": "application/json"}
    })
        .then(res=>res.json())
        .then(res=>{
            document.write(res.nombre)
        })
})



/* const div = document.getElementById("div")
var a = 'hola mundo'
fetch("https://reqres.in/api/users",{
    method: "POST",
    body: `{"nombre": "${a}"}`,
    headers: {"Content-type": "application/json"}
})
    .then(res=>res.json())
    .then(res=>{
        document.write(res.nombre)
    }) */

import {Photos} from './photos.js'

import "./index.css"

let photos = new Photos()


async function main(){
    await console.log(photos.getphotos())
}

main()

console.log("hola mundo")


function vali(text){
    try{
        JSON.parse(text);
        return true;
    } catch{
        return false
    }
}

console.log(vali("hola"))

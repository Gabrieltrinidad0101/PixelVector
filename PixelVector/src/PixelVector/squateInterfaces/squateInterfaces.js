import "./squateInterfaces.css"
import GlobalVariables from "../../globalVarible/globalVariable"
import {removeOffsetCanvasPosition,px} from "../libs/position"
class SquareInterfaces{
    constructor(){
        this.body = document.body
        this.globalVariables = new GlobalVariables()
    }

    position(x,y){
        this.button.style.left = px(x)
        this.button.style.top = px(y)
    }

    addPosition(x,y){
        const position = this.button.getBoundingClientRect() 
        this.button.style.left = `${position.x + x}px`
        this.button.style.top = `${position.y + y}px`
    } 

    create({x,y,width,height}){
        this.button = document.createElement("div")
        const {interfacesX,interfacesY} = removeOffsetCanvasPosition(x,y)
        this.button.className = "btnSquareInterfaces"
        this.position(interfacesX,interfacesY)
        this.button.style.width = px(width)
        this.button.style.height = px(height)
        this.body.appendChild(this.button)
        this.button.addEventListener("mousedown",_=>{
            console.log("ok")
        })
        this.isMouseDown = false
    }

    #eventBase(event,cb){
        this.button.addEventListener(event,e=>{
            cb(e)
        })
    }

    click(cb){
        this.#eventBase("mousedown",cb)
    }

    up(cb){
        this.#eventBase("mouseup",cb)
    }

    out(cb){
        this.#eventBase("mouseout",cb)
    }

    move(cb){
        this.#eventBase("mousemove",cb)
    }

    press(cb){
        this.click(_=>this.isMouseDown= true)
        this.up(_=>this.isMouseDown= false)
        this.out(_=>this.isMouseDown= false)
        this.move(e=>{
            if(this.isMouseDown) cb(e)
        })
    }
}

export default SquareInterfaces
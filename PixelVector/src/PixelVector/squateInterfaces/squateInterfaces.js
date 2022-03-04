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

    collision(rect1,e){
        const rect2 = {x: e.clientX,y: e.clientY,width: 0,height: 0}
        if (rect1.x < rect2.x + rect2.width &&
            rect1.x + rect1.width > rect2.x &&
            rect1.y < rect2.y + rect2.height &&
            rect1.height + rect1.y > rect2.y){
            return true
        }
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
        this.isMouseDown = false
    }

    #eventBase(event,cb){
        this.button.addEventListener(event,e=>{
            cb(e)
        })
    }

    #eventBaseCanvas(event,cb,typeCollision){
        const canvas = this.globalVariables.get("mainCanvas")
        window.addEventListener(event,e=>{
            const rect1 = canvas.getBoundingClientRect()
            if(this.collision(rect1,e) === typeCollision){
                cb(e)
            }
        })
    }

    click(cb){
        this.#eventBase("mousedown",cb)
    }

    up(cb){
        this.#eventBase("mouseup",cb)
    }

    out(cb){
        this.#eventBaseCanvas("mouseout",cb,false)
    }

    move(cb){
        window.addEventListener("mousemove",e=>{
            const rect1 = this.button.getBoundingClientRect()
            if(this.collision(rect1,e)){
                cb(e)
            }
        })
    }

    press(cb){
        this.click(_=>{
            this.isMouseDown= true
            this.button.style.zIndex = 100
        })
        this.up(_=>{
            console.log("okkkk")
            this.isMouseDown= false
            this.button.style.zIndex = 1
        })
        this.out(_=>{
            console.log("okkkk")
            this.isMouseDown= false
            this.button.style.zIndex = 1
        })
        this.move(e=>{
            if(this.isMouseDown) cb(e)
        })
    }
}

export default SquareInterfaces
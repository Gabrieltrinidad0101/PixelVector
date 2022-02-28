import "./squateInterfaces.css"
import GlobalVariables from "../../globalVarible/globalVariable"
import {removeOffsetCanvasPosition,px} from "../libs/position"
class SquareInterfaces{
    constructor(){
        this.body = document.body
        this.globalVariables = new GlobalVariables()
    }

    postion(x,y){
        this.button.style.left = px(x)
        this.button.style.top = px(y)
    }
    
    create({x,y,width,height}){
        this.button = document.createElement("div")
        const {interfacesX,interfacesY} = removeOffsetCanvasPosition(x,y)
        this.button.className = "btnSquareInterfaces"
        this.postion(interfacesX,interfacesY)
        this.button.style.width = px(width)
        this.button.style.height = px(height)
        this.body.appendChild(this.button)
        this.isMouseDown = false
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

    click(cb){
        const rect1 = this.button.getBoundingClientRect()
        window.addEventListener("mousedown",e=>{
            this.isMouseDown = true
            if(this.collision(rect1,e)){
                cb(e)
            }
        })
    }

    up(){
        window.addEventListener("mouseup",e=>{
            this.isMouseDown = false
        })
    }

    press(cb){
        const rect1 = this.button.getBoundingClientRect()
        window.addEventListener("mousemove",e=>{
            console.log(this.isMouseDown)
            if(this.isMouseDown && this.collision(rect1,e)){
                console.log("oks")
                cb(e)
            }
        })
    }
}

export default SquareInterfaces
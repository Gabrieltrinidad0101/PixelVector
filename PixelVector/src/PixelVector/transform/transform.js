import SquareInterfaces from "../squateInterfaces/squateInterfaces"
import {addOffsetCanvasPosition} from "../libs/position"
class TransForm{
    constructor(){
        this.canTransform = true
    }
    add(obj){
        const squareInterfaces = new SquareInterfaces()
        squareInterfaces.create(obj)

        squareInterfaces.click(e=>{
            console.log("ok")
            this.canTransform = true
            squareInterfaces.move(e=>{
                if(this.canTransform){
                    const {movementX,movementY,clientX,clientY} = e
                    const {interfacesX,interfacesY} = addOffsetCanvasPosition(clientX,clientY)
                    obj.x += movementX
                    obj.y += movementY
                    squareInterfaces.addPosition(movementX,movementY)
                }
        })})
        squareInterfaces.up(_=> this.canTransform = false )
    }
}

export default TransForm
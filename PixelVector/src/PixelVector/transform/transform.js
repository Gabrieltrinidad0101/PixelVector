import SquareInterfaces from "../squateInterfaces/squateInterfaces"
import {addOffsetCanvasPosition} from "../libs/position"
class TransForm{
    constructor(){
        this.canTransform = true
    }
    add(obj){
        const squareInterfaces = new SquareInterfaces()
        squareInterfaces.create(obj)

        squareInterfaces.press(e=>{
            if(this.canTransform){
                const {movementX,movementY,clientX,clientY} = e
                obj.x += movementX
                obj.y += movementY
                squareInterfaces.addPosition(movementX,movementY)
            }
        })
    }
}

export default TransForm
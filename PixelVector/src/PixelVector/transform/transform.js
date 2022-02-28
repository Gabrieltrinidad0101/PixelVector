import SquareInterfaces from "../squateInterfaces/squateInterfaces"
import {addOffsetCanvasPosition} from "../libs/position"
class TransForm{
    add(obj){
        const squareInterfaces = new SquareInterfaces()
        squareInterfaces.create(obj)
        squareInterfaces.press(e=>{
            const {clientX,clientY} = e
            const {interfacesX,interfacesY} = addOffsetCanvasPosition(clientX,clientY)
            alert("oks")
        })
    }
}

export default TransForm
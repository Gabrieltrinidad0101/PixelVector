import Rect from "../shape/rect/rect"
import GlobalVariables from "../../globalVarible/globalVariable"
class Layer{
    constructor(type){
        this.type = type
        this.render = true
        this.globalVariables = new GlobalVariables()
        this.createCanvas()
    }

    createCanvas(){
        this.canvas = document.createElement("canvas")
        this.ctx = this.canvas.getContext("2d")
        const {width,height} = this.globalVariables.get("canvasDimensions")
        this.canvas.width = width
        this.canvas.height = height
        this.rect = new Rect()
                        .setCtx(this.ctx)
    }

    update(){
        this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height)
        this.rect.render()
    }

    easeLinear (p) {
        return p
    }


}

export default Layer
import Rect from "../shape/rect/rect"
class Layer{
    constructor(type){
        this.type = type
        this.render = true
        this.createCanvas()
    }

    createCanvas(){
        this.canvas = document.createElement("canvas")
        this.ctx = this.canvas.getContext("2d")
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
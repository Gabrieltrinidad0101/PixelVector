import ConatinerLayers from "./conatinerLayers/conatinerLayers"
import GlobalVariables from "../globalVarible/globalVariable"
class PixelVector{
    #mainCanvas = null
    #mainCtx = null
    #layers = null
    constructor(canvasId){
        this.#mainCanvas = document.getElementById(canvasId)
        this.#mainCtx = this.#mainCanvas.getContext("2d")
        this.#layers = new ConatinerLayers()
        this.globalVariables = new GlobalVariables()
        const offset = {offsetX: this.#mainCanvas.offsetLeft,offsetY: this.#mainCanvas.offsetTop}
        this.globalVariables.set("canvasOffset",offset)
    }

    createLayer({type,name}){
        const newLayer = this.#layers.add(type,name)
        return newLayer
    }

    #paint(layer){
        layer.update()
        const {canvas} = layer
        this.#mainCtx.drawImage(canvas,0,0)
    }

    render(fps=100){
        const loop = setInterval(_=>{
            this.#mainCtx.clearRect(0,0,this.#mainCanvas.width,this.#mainCanvas.height)
            this.#layers.forEach(layer=>{
                this.#paint(layer)
            })
        },fps)
    }
}

export default PixelVector
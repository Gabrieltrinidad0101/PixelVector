import ConatinerLayers from "./conatinerLayers/conatinerLayers"
class PixelVector{
    #mainCanvas = null
    #mainCtx = null
    #layers = null
    constructor(canvasId){
        this.#mainCanvas = document.getElementById(canvasId)
        this.#mainCtx = this.#mainCanvas.getContext("2d")
        this.#layers = new ConatinerLayers()
        this.#render()
    }

    createLayer({type,name}){
        const newLayer = this.#layers.add(type,name)
        return newLayer
    }

    #render(){

    }

}

export default PixelVector
import Layer from "../layer/layer"

class ConatinerLayers{
    constructor(){
        this.layers = new Map()
    }

    add(type,name){
        const newLayer = new Layer(type)
        return this.layers.set(name,newLayer)
    }

    get get(name){
        return this.layers.get(name)
    }

    remove(name){
        return this.layers.delete(name)
    }

    forEach(cb){
        this.layers.forEach(layer=>{
            cb(layer)
        })
    }
}

export default ConatinerLayers
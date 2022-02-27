class Rect{
    #ctx = null
    constructor(){
        this.setCtx()
        this.rects = []
    }

    create({x,y,width,height}){
        const rect = {x,y,width,height}
        this.rects.push(rect)
        return rect
    }

    render(){
        this.rects.forEach(({x,y,width,height})=>{
            this.#ctx.beginPath()
            if(!this.#ctx) return console.log("the ctx is null")
            this.#ctx.fillRect(x,y,width,height)
            this.#ctx.closePath()
        })
        return this
    }

    setCtx(ctx=null){
        this.#ctx = ctx
        return this
    }
}

export default Rect
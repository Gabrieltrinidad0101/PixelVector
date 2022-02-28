import TransForm from "../../transform/transform"
class Rect{
    #ctx = null
    constructor(){
        this.transForm = new TransForm()
        this.setCtx()
        this.rects = []
        this.id = 0
    }

    create({x,y,width,height,rotate=0,fillStyle="black",fill=true}){
        const rect = {x,y,width,height,rotate,fillStyle,fill}
        this.rects.push(rect)
        this.id += 1
        this.transForm.add(rect)
        return rect
    }

    render(){
        this.rects.forEach(({x,y,width,height,rotate,fillStyle,fill})=>{
            if(!this.#ctx) return console.log("the ctx is null")
            this.#ctx.save();
            this.#ctx.beginPath();
            this.#ctx.translate(x+width/2, y+height/2 );
            this.#ctx.rotate(rotate*Math.PI/180);

            // draw the rect on the transformed context
            // Note: after transforming [0,0] is visually [x,y]
            //       so the rect needs to be offset accordingly when drawn
            this.#ctx.rect( -width/2, -height/2, width,height);

            this.#ctx.fillStyle=fillStyle;
            if(fill)this.#ctx.fill();
            
            this.#ctx.restore();

        })
        return this
    }

    setCtx(ctx=null){
        this.#ctx = ctx
        return this
    }
}

export default Rect
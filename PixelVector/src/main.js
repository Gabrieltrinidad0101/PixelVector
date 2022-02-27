import PixelVector from "./PixelVector/PixelVector";

const canvas = new PixelVector("canvas")
const layer1 = canvas.createLayer({type: "vector", name: "layer1"})

const rect = layer1.rect.create({x: 10,y: 30,width: 50,height: 50})
const rect1 = layer1.rect.create({x: 40,y: 50,width: 50,height: 50})
const rect2 = layer1.rect.create({x: 60,y: 70,width: 50,height: 50})


const layer2 = canvas.createLayer({type: "vector", name: "layer2"})
const Rect = layer2.rect.create({x: 100,y: 30,width: 50,height: 50})
const Rect1 = layer2.rect.create({x: 40,y: 50,width: 50,height: 50})
const Rect2 = layer2.rect.create({x: 60,y: 70,width: 50,height: 50})

setInterval(_=>{
    Rect.x += 1
})



canvas.render(10)

// const rect3 = layer1.group(rect,rect1,rect2)

// rect3.timeline({
//   typeAnimtion: "ease",
//   duration: 2,
//   animation: {
    
//   }
// })

// rect3.lineWidth = 10

// layer1.convertToPixel()

// layer1.forEach(subLayer=>{

// })

import PixelVector from "./PixelVector/PixelVector";

const canvas = PixelVector("canvas")
const layer1 = canvas.createLayer({type: "vector", name: "layer1"})
console.log(layer1)
// const rect = layer1.rect(10,10,100,100)
// const rect1 = layer1.rect(10,10,100,100)
// const rect2 = layer1.rect(10,10,100,100)

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

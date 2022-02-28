import PixelVector from "./PixelVector/PixelVector";

const canvas = new PixelVector("canvas")
const layer1 = canvas.createLayer({type: "vector", name: "layer1"})

const rect = layer1.rect.create({x: 10,y: 30,width: 50,height: 50})
const rect1 = layer1.rect.create({x: 40,y: 50,width: 50,height: 50})
const rect2 = layer1.rect.create({x: 60,y: 70,width: 50,height: 50})


canvas.render(10)






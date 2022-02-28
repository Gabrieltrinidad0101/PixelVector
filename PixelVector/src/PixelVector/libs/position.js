import GlobalVariables from "../../globalVarible/globalVariable"
const globalVariables = new GlobalVariables()

const offsetPostion = (x,y,operation)=>{
    const {offsetX,offsetY} = globalVariables.get("canvasOffset")
    const interfacesX =  eval(`${x} ${operation} ${offsetX}`)
    const interfacesY =  eval(`${y} ${operation} ${offsetY}`)
    return {interfacesX,interfacesY}
}

export const removeOffsetCanvasPosition = (x,y)=>{
    return offsetPostion(x,y,"+")
}

export const addOffsetCanvasPosition = (x,y)=>{
    return offsetPostion(x,y,"-")
}

export const px = vector=>{
    return `${vector}px`
}




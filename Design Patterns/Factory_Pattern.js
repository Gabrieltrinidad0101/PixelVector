class House{
    get bathroom(){
        return "bathroom"
    }

    get kitchen(){
        return "kitchen"
    }

    get room(){
        return "room"
    }
}


class Hospital{
    get a1(){
        return "a1"
    }

    get a2(){
        return "a2"
    }

    get a3(){
        return "a3"
    }
}

class office{
    get e1(){
        return "e1"
    }

    get e2(){
        return "e2"
    }

    get e3(){
        return "e3"
    }
}

class Factory{
    constructor(type){
        if(type === "House" ){
            return new House()
        }
        else if(type === "Hospital" ){
            return new Hospital()
        }else if(type === "office" ){
            return new office()
        }
    }
}



const Office =  new Factory("office")
console.log(Office.e1)
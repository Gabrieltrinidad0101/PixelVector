class Fedex{
    calculadora = Package =>{
        return 1.5
    }
}

class UPS{
    calculadora = Package =>{
        return 1.56
    }
}

class USPS{
    calculadora = Package =>{
        return 1.5
    }
}

class Strategy{
    #company
    setStategy = company=>{
        this.#company = company        
    }

    calculadora = Package =>{
        return this.#company.calculadora(Package)
    }
}
const package = {
    from: "Alabama",
    to: "Georgia"
}

const fedex = new Fedex()
const ups = new UPS()
const usps = new USPS()

let strategy = new Strategy()
strategy.setStategy(fedex)
console.log(strategy.calculadora(package))

strategy = new Strategy()
strategy.setStategy(ups)
console.log(strategy.calculadora(package))

strategy = new Strategy()
strategy.setStategy(usps)
console.log(strategy.calculadora(package))


const globalVariableString = localStorage.getItem("globalVariables")
const globalVariables = globalVariableString ? JSON.parse(globalVariableString) : {}

class GlobalVariables{
    set(name,value){
        globalVariables[name] = value
        localStorage.setItem("globalVariables", JSON.stringify(globalVariables))
    }

    get(name){
        return globalVariables[name]
    }
}

export default GlobalVariables
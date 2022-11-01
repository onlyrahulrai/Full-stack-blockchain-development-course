function computeDash(value){
    
    const str = value.toString()
    const results = []
    
    for(let i = 0;i < str.length; i++){
        if(str[i]%2 === 0 && str[i+1]%2 === 0){
            results.push(str[i],"-")
        }else{
            results.push(str[i])
        }
    }

    return results.join("")
}

const value = '025468'

console.log(computeDash(value))

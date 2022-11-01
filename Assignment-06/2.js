function find_largest(index){
    const elements = [3,45,6,7,23,5,7,8]

    if((index < 0) || (index > (elements.length - 1))) return;

    for(let i = 0; i < elements.length; i++){
        for(let j = i + 1; j < elements.length; j++){
            if(elements[i] > elements[j]){
                let temp = elements[j];
                elements[j] = elements[i]
                elements[i] = temp;
            }
        }
    }

    return [...new Set(elements)][index + 1]
}

console.log(find_largest(3))





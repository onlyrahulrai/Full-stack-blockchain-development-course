const x = 2, y = 3, z = 4;

if(x === y && y === z){
    console.log("Equalateral Triangle")
}else if(x === y || x === z || y === z){
    console.log("Isosceles Triangle")
}else{
    console.log("Scalene Triangle")
}
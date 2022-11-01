class Rectangle{
    constructor(width,length){
        this.width = width;
        this.length = length;
    }

    area(){
        return this.width * this.length;
    }
}

class Sqaure extends Rectangle{
    constructor(s){
        super(s)
        this.width = s;
        this.length = s;
    }
}

const rectangle = new Rectangle(2,2);
const square = new Sqaure(2);


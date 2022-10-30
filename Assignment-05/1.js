class Sphere{
    constructor(radius){
        this.radius = radius;
    }

    getVolume(){
        return ((4*Math.PI*(this.radius**3))/3).toFixed(4)
    }
}

class Cylinder extends Sphere{
    constructor(radius,height){
        super(radius)
        this.height = height;
    }

    getVolume(){
        return (Math.PI * (this.radius ** 2) * this.height).toFixed(4);
    }
}

class Cone extends Cylinder{
    constructor(radius,height){
        super(radius,height);
    }

    getVolume(){
        return ((Math.PI*(this.radius**2)*this.height)/3).toFixed(4)
    }
}

const sphere = new Sphere(2);

const cylinder = new Cylinder(2,2);

const cone = new Cone(2,2)










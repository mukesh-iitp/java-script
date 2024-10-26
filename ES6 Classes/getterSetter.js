class Circle{
    constructor(radius){
        this.radius=radius;
    }

    get diameter(){
        return this.radius*2;
    }

    // getDiameter(){
    //     console.log(this.radius*2);
    // }

    set diameter(newDiameter){
        if(newDiameter>=0)
            this.radius=newDiameter/2;
        else
            console.log('invalid input!');
    }

}


const circle=new Circle(4);
console.log(circle.radius);
// circle.getDiameter();
console.log('using setter method');
console.log(circle.diameter); //accessing get method as a property

circle.diameter=16; //there will be no change
console.log(circle.diameter);

circle.radius=6;
console.log(circle.diameter);

console.log('using setter method');
circle.diameter=20; //using set method we can now chagne the diameter
console.log(circle.radius);
console.log(circle.diameter);

circle.diameter=-2;
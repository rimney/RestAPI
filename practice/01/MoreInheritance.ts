class animal
{
    protected name : string = "";
    constructor(name : string)
    {
        this.name = name;
    }
    move(steps : number = 0)
    {
        console.log(`${this.name} Moved ${steps}`);
    }
}

class snake extends animal{
    
    constructor(name : string)
    {
        super(name);
    }
    move(distance = 5)
    {
        console.log("Slithering ...");
        super.move(distance);
    }
}

class Horse extends animal
{
    constructor(name : string)
    {
        super(name);
    }
    move(distance : number)
    {

        console.log("Hrrrrr ...");
        super.move(distance)
    }
}

let ho = new snake("snsns");
ho.move(66);
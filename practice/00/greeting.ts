class Greeting
{
    readonly ronly : string = "Default";
    constructor(ron?: string)
    {
        if(ron !== undefined)
            this.ronly = ron;
    }    
    public getRo()
    {
        return (this.ronly);
    }

}

let a = new Greeting();
console.log(a.getRo());
// a.ronly = "RRR"; cannot do this cause its been declared as readonly


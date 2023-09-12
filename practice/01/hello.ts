class greeting
{
    private message : string;
    constructor(greeting : string)
    {
        this.message = greeting;
    }
    greet()
    {
        return ("hello" + this.message);
    }
}

const gr = new greeting(", world!");
console.log(gr.greet());
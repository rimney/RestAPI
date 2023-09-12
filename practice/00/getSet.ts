class Base
{
    protected _a : number = 0;
    protected _b : number = 0;
    constructor(a? : number, b? : number)
    {
        if(a === undefined || b === undefined)
            return ;
        this._a = a;
        this._b = b; 
        console.log("PASSED");
    }
    get a()
    {
       return (this._a);
    }
    get b()
    {
       return (this._b);
    }
    set a(val : number)
    {
        this._a = val;
    }
    set b(val : number)
    {
        this._b = val
    }
}

class E extends Base
{
    private _len = 0;
    set len(len : number)
    {
        this._len = len;
    }
    get len()
    {
        return (this._len);
    }
    constructor(a : number, b : number)
    {
        super(a, b);
    }
}

const cla = new E(1, 2);
cla.len = 44;
console.log(cla.a);
console.log(cla.b); // is printable due to get b in baseClass

console.log(cla.len); // if get len() was no implemented it would give us undifined !

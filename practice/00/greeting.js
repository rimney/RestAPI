var Greeting = /** @class */ (function () {
    function Greeting(ron) {
        this.ronly = "Default";
        if (ron !== undefined)
            this.ronly = ron;
    }
    Greeting.prototype.getRo = function () {
        return (this.ronly);
    };
    return Greeting;
}());
var a = new Greeting();
console.log(a.getRo());
a.ronly = "RRR";

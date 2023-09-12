var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var animal = /** @class */ (function () {
    function animal(name) {
        this.name = "";
        this.name = name;
    }
    animal.prototype.move = function (steps) {
        if (steps === void 0) { steps = 0; }
        console.log("".concat(this.name, " Moved ").concat(steps));
    };
    return animal;
}());
var snake = /** @class */ (function (_super) {
    __extends(snake, _super);
    function snake(name) {
        return _super.call(this, name) || this;
    }
    snake.prototype.move = function (distance) {
        if (distance === void 0) { distance = 5; }
        console.log("Slithering ...");
        _super.prototype.move.call(this, distance);
    };
    return snake;
}(animal));
var Horse = /** @class */ (function (_super) {
    __extends(Horse, _super);
    function Horse(name) {
        return _super.call(this, name) || this;
    }
    Horse.prototype.move = function (distance) {
        console.log("Hrrrrr ...");
        _super.prototype.move.call(this, distance);
    };
    return Horse;
}(animal));
var ho = new snake("snsns");
ho.move(66);

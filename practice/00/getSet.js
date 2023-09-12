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
var Base = /** @class */ (function () {
    function Base(a, b) {
        this._a = 0;
        this._b = 0;
        if (a === undefined || b === undefined)
            return;
        this._a = a;
        this._b = b;
        console.log("PASSED");
    }
    Object.defineProperty(Base.prototype, "a", {
        get: function () {
            return (this._a);
        },
        set: function (val) {
            this._a = val;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Base.prototype, "b", {
        get: function () {
            return (this._b);
        },
        set: function (val) {
            this._b = val;
        },
        enumerable: false,
        configurable: true
    });
    return Base;
}());
var E = /** @class */ (function (_super) {
    __extends(E, _super);
    function E(a, b) {
        var _this = _super.call(this, a, b) || this;
        _this._len = 0;
        return _this;
    }
    Object.defineProperty(E.prototype, "len", {
        get: function () {
            return (this._len);
        },
        set: function (len) {
            this._len = len;
        },
        enumerable: false,
        configurable: true
    });
    return E;
}(Base));
var cla = new E(1, 2);
cla.len = 44;
console.log(cla.a);
console.log(cla.b);
console.log(cla.len);

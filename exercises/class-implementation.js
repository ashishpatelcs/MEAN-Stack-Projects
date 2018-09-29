var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Mobiles = (function () {
    function Mobiles(screenSize, ram, OS) {
        this.screenSize = screenSize;
        this.ram = ram;
        this.OS = OS;
    }
    Mobiles.prototype.getMobile = function () {
        return this.screenSize + this.ram + this.OS;
    };
    return Mobiles;
}());

var mobile = new Mobiles(5, 1, "iOS");
//mobile.OS = 'Android';

var Smartphones = (function (_super) {
    __extends(Smartphones, _super);
    function Smartphones(screenSize, ram, OS, camera, AI) {
        var _this = _super.call(this, screenSize, ram, OS) || this;
        _this.camera = camera;
        _this.AI = AI;
        return _this;
    }
    Smartphones.prototype.getFeatures = function () {
        return this.screenSize + this.camera + this.AI;
    };
    return Smartphones;
}(Mobiles));

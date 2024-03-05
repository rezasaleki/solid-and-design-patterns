var AppleTablet1 = /** @class */ (function () {
    function AppleTablet1() {
    }
    AppleTablet1.prototype.ring = function () { };
    AppleTablet1.prototype.switchOn = function () { };
    return AppleTablet1;
}());
var AppleWatch2 = /** @class */ (function () {
    function AppleWatch2() {
    }
    AppleWatch2.prototype.ring = function () { };
    AppleWatch2.prototype.switchOn = function () { };
    return AppleWatch2;
}());
function testProduct1() {
    var tables = new AppleTablet1();
    tables.ring();
    tables.switchOn();
    var watch = new AppleWatch2();
    watch.ring();
    watch.switchOn();
}
function testProducts(company) {
    if (company === 'apple') {
        var tables = new AppleTablet1();
        tables.ring();
        tables.switchOn();
        var watch = new AppleWatch2();
        watch.ring();
        watch.switchOn();
    }
    if (company === 'samsung') {
        // ....
    }
}
var AppleSmartPhone = /** @class */ (function () {
    function AppleSmartPhone() {
    }
    AppleSmartPhone.prototype.switchOn = function () {
        console.log('Apple Smartphone: Switching on');
    };
    AppleSmartPhone.prototype.ring = function () {
        console.log('Apple Smartphone: Ringing');
    };
    return AppleSmartPhone;
}());
var AppleTablet = /** @class */ (function () {
    function AppleTablet() {
    }
    AppleTablet.prototype.switchOn = function () {
        console.log('Apple Tablet: Switching on');
    };
    return AppleTablet;
}());
var SamsungSmartPhone = /** @class */ (function () {
    function SamsungSmartPhone() {
    }
    SamsungSmartPhone.prototype.switchOn = function () {
    };
    SamsungSmartPhone.prototype.ring = function () {
    };
    return SamsungSmartPhone;
}());
var AppleFactory = /** @class */ (function () {
    function AppleFactory() {
    }
    AppleFactory.prototype.createSmartPhone = function () {
        return new AppleSmartPhone();
    };
    AppleFactory.prototype.createTable = function () {
        return new AppleTablet();
    };
    return AppleFactory;
}());
function testProductFactory(factory) {
    var smartPhone = factory.createSmartPhone();
    smartPhone.ring();
    smartPhone.switchOn();
    var tablet = factory.createTable();
    tablet.switchOn();
}
testProductFactory(new AppleFactory());

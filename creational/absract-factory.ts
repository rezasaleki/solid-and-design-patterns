class AppleTablet1 {
    ring() {
    }

    switchOn() {
    }
}

class AppleWatch2 {
    ring() {
    }

    switchOn() {
    }
}

function testProduct1() {
    const tables = new AppleTablet1();
    tables.ring();
    tables.switchOn();

    const watch = new AppleWatch2();
    watch.ring();
    watch.switchOn();
}

function testProducts(company: string) {
    if (company === 'apple') {
        const tables = new AppleTablet1();
        tables.ring();
        tables.switchOn();

        const watch = new AppleWatch2();
        watch.ring();
        watch.switchOn();
    }

    if (company === 'samsung') {
        // ....
    }
}

interface Tablet {
    switchOn();
}

interface Smartphone {
    switchOn();

    ring();
}

interface DeviceFactory {
    createSmartPhone(): Smartphone;

    createTable(): Tablet;
}

class AppleSmartPhone implements Smartphone {
    switchOn() {
        console.log('Apple Smartphone: Switching on');
    }

    ring() {
        console.log('Apple Smartphone: Ringing');
    }
}

class AppleTablet implements Tablet {
    switchOn() {
        console.log('Apple Tablet: Switching on');
    }
}

class SamsungSmartPhone implements Smartphone {
    switchOn() {
    }

    ring() {
    }
}


class AppleFactory implements DeviceFactory {
    createSmartPhone(): Smartphone {
        return new AppleSmartPhone();
    }

    createTable(): Tablet {
        return new AppleTablet();
    }
}

function testProductFactory(factory: DeviceFactory) {
    const smartPhone = factory.createSmartPhone();
    smartPhone.ring();
    smartPhone.switchOn();

    const tablet = factory.createTable();
    tablet.switchOn();
}

testProductFactory(new AppleFactory());



// Factory Method

// Bad Code

class Delivery { 
    handle(mode: string) {
        if (mode === 'bike') {
            const bike = new Bike();
            bike.setMode('eco');
            bike.move();
        } else if (mode === 'car') {
            const car = new Car();
            // implement code
        }

    }
} 

// Good Code 

interface Vehicle {
  setMode(mode: string): any;
  move(): any;
}

class Bike implements Vehicle { 
    setMode(mode: string) {}
    move() {}
}

class Car implements Vehicle {
    setMode(mode: string) {}
    move() {}
}


abstract class DeliveryAbstractFactory {
    public abstract makeVehicle(): any;
    handle() {
        const vehicle = this.makeVehicle();
        vehicle.move();
    }
}

class BikeDelivery extends DeliveryAbstractFactory {
    makeVehicle(): any {
        const bike = new Bike()
        bike.setMode('eo');
        return bike;
    }
}

const bikeDelivery = new BikeDelivery();
bikeDelivery.handle();

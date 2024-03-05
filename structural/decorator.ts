interface RoomInterface {
    getPrice(): number;
    getAmenity(): string;
}

class SimpleRoom implements RoomInterface {
    getPrice(): number {
        return 1.2;
    }

    getAmenity(): string {
        return 'base room';
    }
}

class BaseDecorator implements RoomInterface {
    protected room: RoomInterface;

    constructor(room: RoomInterface) {
        this.room = room;
    }

    getPrice(): number {
        return this.room.getPrice();
    }

    getAmenity(): string {
        return this.room.getAmenity();
    }
}

class WifiDecorator extends BaseDecorator {
    getPrice(): number {
        return super.getPrice() + 2;
    }

    getAmenity(): string {
        return `${super.getAmenity()} + 'Wifi'`;
    }
}

let room = new SimpleRoom();

console.log('Amenity:', room.getAmenity());
console.log('Price:', room.getPrice());

room = new WifiDecorator(room);

console.log('Amenity:', room.getAmenity());
console.log('Price:', room.getPrice());
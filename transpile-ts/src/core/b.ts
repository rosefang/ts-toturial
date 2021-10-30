
interface PointB {
    x: number;
    y: number;
}

declare const myPointB: PointB;

class MyPointB implements PointB {
    x: number;
    y: number;

    constructor(){
        this.x = 1;
        this.y = 2;
        console.log('x is ', this.x);
    }
}
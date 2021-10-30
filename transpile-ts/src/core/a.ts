
interface PointA {
    x: number;
    y: number;
}

declare const myPointA: PointA;

class MyPointA implements PointA {
    x: number;
    y: number;

    constructor(){
        this.x = 1;
        this.y = 2;
        console.log('x is ', this.x);
    }
}
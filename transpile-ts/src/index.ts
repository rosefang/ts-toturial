
interface Point {
    x: number;
    y: number;
}

declare const myPoint: Point;

class MyPoint implements Point {
    x: number;
    y: number;

    constructor(){
        this.x = 1;
        this.y = 2;
        console.log('x is ', this.x);
    }
}
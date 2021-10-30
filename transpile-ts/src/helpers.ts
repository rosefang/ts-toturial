
interface PointHelper {
    x: number;
    y: number;
}

declare const myPointHelper: PointHelper;

class MyPointHelper implements PointHelper {
    x: number;
    y: number;

    constructor(){
        this.x = 1;
        this.y = 2;
        console.log('x is ', this.x);
    }
}
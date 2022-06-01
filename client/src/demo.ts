let data = 42; //Typescript infers data: number

data = '42'; //complains because data has been infereted to be of type number

data = 10;

let data2: number | string;

data2 = '42';
data2 = 10;


//Objects infer property types (hover over car#)
const car1 = {
    color: 'blue',
    model: 'bmw'
};

const car2 = {
    color: 'red',
    model: 'mercedes',
    topSpeed: 100
};

//Can create interfaces
interface ICar {
    color: string;
    model: string;
    topSpeed?: number; //if not optional car3 will complain
}


const car3: ICar = {
    color: 'blue',
    model: 'bmw'
};

const car4: ICar = {
    color: 'red',
    model: 'mercedes',
    topSpeed: 100
};

const multiply = (x: number, y: number): number => {
    return x * y;
}

const multiplyStringy = (x: number, y: number): string => {
    return (x * y).toString();
}
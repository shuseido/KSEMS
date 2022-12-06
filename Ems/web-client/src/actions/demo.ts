// typescript dont recommend to prefix I before interface so we use Duck instead of IDuck
// use as a class
// use question mark "?" to make property is optional. it will have value undefine if variable not set
// example: interface Duck { makeSound?: (sound: string) => void; }
// use exclamation mark "!" to check if the property is not undefine
// example: duck1.makeSound!('quack');
// but we kind of try and avoid the use of excalmation mark
// so dont make property optional
// use 'export' to make interface and variables able to use in other files

export interface Duck {
    name: string;
    numLegs: number;
    makeSound: (sound: string) => void;
}

const duck1: Duck = {
    name: 'huey',
    numLegs: 2,
    makeSound: (sound: any) => console.log(sound),
};

const duck2: Duck = {
    name: 'dewey',
    numLegs: 2,
    makeSound: (sound: any) => console.log(sound),
};

// duck1.makeSound('quack');

export const ducks = [duck1, duck2];

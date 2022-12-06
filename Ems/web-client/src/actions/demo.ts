// Begin with TypeScript
// First of all: TypeScript need us to define the type of variable
// If not, it will mark it as a warning
// Example: let data = 49; will show as warning
// to make the warning disappear, we need to turn off isolatedModules. In file tsconfig.json into false
// Second. As the warning is disasppear now. The value that we set to variable will known as its type
// Example, if we simply set: let data = 49; Then the data now will be known as a number
// If later we set it as string type like data = '49'; then it will show up as warning
// to make it easier; we can set it type (use ':') any
// example; let data: any = 49; data = '49';

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

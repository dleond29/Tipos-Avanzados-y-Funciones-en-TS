// DIEGO => [D,I,E,G,O] -> string => string[]
// [D,I,E,G,O] => DIEGO -> string[] => string

export function parseString(input: string): string[];
export function parseString(input: string[]): string;
export function parseString(input: number): boolean;

// //Overload only works with this type of function
// export function parseString(input: string | string[]): string | string[] {
//   if (Array.isArray(input)) {
//     return input.join(''); //string
//   }else{
//     return input.split(''); //string[]
//   }
// }

//Refactoring this function
export function parseString(input: unknown): unknown {
  if (Array.isArray(input)) {
    return input.join(''); //string
  }else if (typeof input === 'string') {
    return input.split(''); //string[]
  }else if (typeof input === 'number') {
    return true; //boolean
  }
}

const rtaArray = parseString('DIEGO');
rtaArray.reverse();
// if (Array.isArray(rtaArray)){
//   rtaArray.reverse();
// }
console.log('rtaArray', 'DIEGO =>', rtaArray);

const rtaString = parseString(['D','I','E','G','O']);
rtaString.toLowerCase();
// if(typeof rtaString === 'string'){
//   rtaString.toLocaleLowerCase();
// }
console.log('rtaString',"['D','I','E','G','O'] =>", rtaString);


const rtaBoolean = parseString(12);
console.log('rtaBoolean',"12 =>", rtaBoolean);

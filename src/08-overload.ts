// DIEGO => [D,I,E,G,O] -> string => string[]
// [D,I,E,G,O] => DIEGO -> string[] => string

//Overload only works with this type of function
function parseString(input: string | string[]): string | string[] {
  if (Array.isArray(input)) {
    return input.join(''); //string
  }else{
    return input.split(''); //string[]
  }
}

const rtaArray = parseString('DIEGO');
//rtaArray.reverse();
if (Array.isArray(rtaArray)){
  rtaArray.reverse();
}
console.log('rtaArray', 'DIEGO =>', rtaArray);

const rtaString = parseString(['D','I','E','G','O']);
//rtaString.toLowerCase();
if(typeof rtaString === 'string'){
  rtaString.toLocaleLowerCase();
}
console.log('rtaString',"['D','I','E','G','O'] =>", rtaString);

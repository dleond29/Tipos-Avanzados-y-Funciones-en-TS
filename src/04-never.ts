const withoutEnd = () => {
  while (true) {
    console.log('Never stop learning')
  }
}

const fail = (message: string) => {
  throw new Error(message);
}

const example = (input:unknown) =>{
  if (typeof input === 'string'){
    return 'is a string'
  }else if(Array.isArray(input)){
    return 'is an array';
  }
  return fail('not match');
}

console.log(example('Hola'));
console.log(example([1,1,1]));
console.log(example(1234)); //stop
console.log(example('Hello after the fail'));

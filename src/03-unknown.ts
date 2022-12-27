let anyVar: any;
anyVar = true;
anyVar = undefined;
anyVar = null;
anyVar = 1;
anyVar = {};

//Let assign a boolean type for and object, this is incorrect
let isNew: boolean = anyVar;

//Don't have static analysis context
anyVar.doSomething();
anyVar.toUpperCase();

let unknowVar: unknown;
unknowVar = true;
unknowVar = undefined;
unknowVar = null;
unknowVar = 1;
unknowVar = {};

//With unknown type we prevent this type of error
//unknowVar.doSomething();

//With unknown type we have to verify types
if (typeof unknowVar == 'string') {
  unknowVar.toUpperCase();
}
if (typeof unknowVar == 'boolean') {
  let isNewV2: boolean = unknowVar;
}

const parse = (str: string):unknown =>{
  return JSON.parse(str);
}

const prices: (number|string)[] = [1,2,3,4, 'yes', 'no'];
prices.push(1);
prices.push('maybe');

let user: [string, number];
user = ['dialleon', 15];

const [username, age] = user;
//Destructuring a tuple
console.log(username);
console.log(age);

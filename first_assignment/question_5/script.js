// var x;
// console.log(x);//undefined
// x=5;
// console.log(x);//5

/*
why? variable are hoisted at the top from where they are defined
before a value is assigned, variables initialised with undefined 
and the output is undefined and it does not show any error

*/

// console.log(y);
// let y=20;
// console.log(y);

/*
in case of let variables they throw referenceError.
let are stored in separate memory space 
let variables are hoisted but are not initialised with undefined they are in temporal deadzone
temporal deadzone: time since when let variable was hoisted and till it is initialised some value. 
u can access these let variables once some value is initialised to them
u wont be able to access let variables with window object it gives undefined. let is a little more strict than var.
*/


console.log(a);
const a=200;
/*
also throw referenceError;
just like var, const are also in temporal dead zone.
additionally when we are using const, we need to initilaise them with some value
we use const when we are sure that the value of the variable wont change
if we change value of const variables it shows error

*/


alert("yes"); 
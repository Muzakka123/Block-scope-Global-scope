// BLOCK SCOPE:
//  block scope refers to the scope of variables declared using let and const 
// within a block of code, such as within curly braces {} 

 let a= 20;
 if(a==20){
    let b = 30;
     const c = 40;
     console.log(a);
     console.log(b);
    console.log(c);
 }
// if i try to print my code outside of curly braces{} result will be error
// console.log(b);     ERROR:

// GLOBAL SCOPE:
//  Variables declared outside of any function or block have global scope.
 //They are accessible from anywhere within the TypeScript file or module.
 // Global variables are declared using the var, let, or const keywords.

  let a1= 20;   //=> this is global value
 if(a1==20){
    let b1= 30;
    const c1= 40;
    console.log(a1);
    console.log(b1);
    console.log(c1);
 }
// Accessing a GLOBAL VARIABLE outside the curly braces .The result will not be an error
     console.log(a1);





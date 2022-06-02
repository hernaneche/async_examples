//--------------------
// Composition
//--------------------

//  f(x) = x ^ 2;
//  g(x) = x + 1;

//  Example x = 2

//  Fist the inner = composeToLeft
//  g(f(x)) = x^2 + 1  = 5 // first apply f, then g
//  f(g(x)) = (x+1)^2  = 9 // first apply g, then f

//  f ( g (x) ) => h(x)
//  g ( f (x) ) => e(x)
// h =?
// e =?

const f = (x) => x * x;
const g = (x) => x + 1;

function composeToRight(...funArr) {
  function retFun(first) {
    //...h(retVal=g(retVal=f(first))) etc...

    var retVal = funArr[0](first); //apply arg to first function
    for (var i = 1; i < funArr.length; i++) {
      retVal = funArr[i](retVal); //last function output return value is next function input argument
    }
    return retVal;
  }
  return retFun;
}

function composeToLeft(...funArr) {
  return composeToRight(...funArr.reverse());
}

//another way to do the same
function composeRight(...arrFun) {
  return (firstInput) =>
    arrFun.reduce((prev, currentValue) => currentValue(prev), firstInput);
}

console.log(composeToRight(f, g)(2)); //first apply f, then g  => 5

composeToRight(f, g)(2); //first apply f, then g  => 5
composeToLeft(f, g)(2); //like math=> f(g(x)) first apply g, then f  => 9

// Linux pipes , also compose to right
// ls | grep .js

//Nice renamig
const pipe = composeRight;

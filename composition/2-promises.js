//---------------------------
// Promises : async / await
//---------------------------

//Sync = good for programming (bad for runtime)
//Async = good for runtime (bad for programming)

// Promises
// Can convert sync to asynch ? => No, try webworkers.
// Can convert async to synch ? => ehh.. not really, but something like that.. "sync inside async functions"

//Example
function askForPizza(callbackHere) {
  setTimeout(() => {
    callbackHere("it's here!");
  }, 3000);
}


console.log("start");
askForPizza((msg) => console.log("answer: " + msg));
console.log("end");


//Now WRAP with a Promise
async function askForPizzaImproved() {
  return new Promise((res) => askForPizza(res));
}

async function run() {
  //sync inside async
  console.log("start");
  console.log("answer: " + (await askForPizzaImproved()));
  console.log("end");
}
/*
console.log("begin");
run(); // as Pizza is asyc, this is still async!
console.log("finish");
*/

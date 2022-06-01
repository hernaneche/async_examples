/*    
  self.addEventListener("message", (evt) => {      
    
    // Heavy work: with the parameter in evt.data

    self.postMessage(  the result  );
  }
  
*/

const wait = (t) => {
  while (t--);
};

self.addEventListener("message", (evt) => {
  const { n } = evt.data;
  console.log("log inside worker");
  const startTime = performance.now();
  wait(n);
  const totalTime = performance.now() - startTime;

  time = Math.round((100 * totalTime) / 1000) / 100;

  self.postMessage({ time });
});

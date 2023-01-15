export {};

   
  class Derived {
    #name = "derived";
    constructor() {
        console.log("My name is " + this.#name);
      }
  }
   
  // Prints "base", not "derived"
  const d = new Derived();
  console.log("Accessing from Outside "+d.name);
  

//This information should be stored in 4 different objects. All of this objects should be stored in localstorage in advance. Their localstorage key should be their respective names.  For e.g Scope data will be stored in LocalStorage with key as "scope". ( Note: no capital letter in key )

//Information should be retrieved from localstorage only, avoid hard coding data.





function myFunction1() {
    document.getElementById("scope").innerHTML = "JavaScript has function scope: Each function creates a new scope Variables defined inside a function are not accessible (visible) from outside the function. ";
  }

  function myFunction2() {
    document.getElementById("hosting").innerHTML=" JavaScript Hoisting refers to the process whereby the interpreter appears to move the <br> declaration of functions, variables or classes to the top of their scope, prior to execution of the code. " ;
  }

  function myFunction3() {
    document.getElementById("constructor").innerHTML = "The constructor method is a special method of a class for creating and initializing an object instance of that class. ";
  }
  function myFunction4() {
    document.getElementById("prototype").innerHTML= "Prototypes are the mechanism by which JavaScript objects inherit features from one <br> another. In this article, we explain what a prototype is, how prototype chains work, and <br> how a prototype for an object can be set.   " ;
  }
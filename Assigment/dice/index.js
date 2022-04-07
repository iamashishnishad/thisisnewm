var dice ={
    sides: 6,
    roll: function() {
        var randomeNumber= Math.floor(Math.random() * this.sides) + 1;
       return randomeNumber; 
    }

}

function printNumber(number) {
    var placeholder = document.getElementById('placeholder');
    placeholder.innerHTML=number;
}
var button =document.getElementById('roll');

button.onclick=function(){
    var result = dice.roll();
    printNumber(result);
};



var dice1 ={
    sides1: 6,
    roll1: function() {
        var randomeNumber1= Math.floor(Math.random() * this.sides1) + 1;
       return randomeNumber1; 
    }

}

function printNumber1(number1) {
    var placeholder1 = document.getElementById('placeholder1');
    placeholder1.innerHTML=number1;
}
var button1 =document.getElementById('roll1');

button1.onclick=function(){
    var result1 = dice1.roll1();
    printNumber1(result1);
};


var dice2 ={
    sides2: 6,
    roll2: function() {
        var randomeNumber2= Math.floor(Math.random() * this.sides2) + 1;
       return randomeNumber2; 
    }

}

function printNumber2(number2) {
    var placeholder2 = document.getElementById('placeholder2');
    placeholder2.innerHTML=number2;
}
var button2 =document.getElementById('roll2');

button2.onclick=function(){
    var result2 = dice2.roll2();
    printNumber2(result2);
};






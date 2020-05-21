'use strict'

//declare variables using DOM

//operators
var clear = document.getElementById('clear');
var equal = document.getElementById('=');
var subtraction = document.getElementById('-');
var addition = document.getElementById('+');
var division = document.getElementById('/');
var multiplication = document.getElementById('*');
var mod = document.getElementById('%');
var decimalPoint = document.getElementById('.');
var smiley = document.getElementById('smiley');

//numbers
var zero = document.getElementById('0');
var one = document.getElementById('1');
var two = document.getElementById('2');
var three = document.getElementById('3');
var four = document.getElementById('4');
var five = document.getElementById('5');
var six = document.getElementById('6');
var seven = document.getElementById('7');
var eight = document.getElementById('8');
var nine = document.getElementById('9');

//display
var result = document.getElementById('result');
var operation = document.getElementById('operation');

//calculator functions
var op = operation.innerText;
var operator;

clear.onclick = function () {
    result.innerText = '';
    operation.innerText = '';
}

//evaluates input
equal.onclick = function () {
    var res = eval(operation.innerText);
    result.innerText = res.toFixed(1);
    operation.innerText = '';
}

addition.onclick = function () {
    operation.innerText += this.id;
    operator = this.id;
}

subtraction.onclick = function () {
    operation.innerText += this.id;
    operator = this.id;
}

division.onclick = function () {
    operation.innerText += this.id;
    operator = this.id;
}

multiplication.onclick = function () {
    operation.innerText += this.id;
    operator = this.id;
}

mod.onclick = function () {
    operation.innerText += this.id;
    operator = this.id;
}


//input
decimalPoint.onclick = function () {
    operation.innerText += this.id;
}

one.onclick = function () {
    operation.innerText += this.id;
}

two.onclick = function () {
    operation.innerText += this.id;
}

three.onclick = function () {
    operation.innerText += this.id;
}

four.onclick = function () {
    operation.innerText += this.id;
}

five.onclick = function () {
    operation.innerText += this.id;
}

six.onclick = function () {
    operation.innerText += this.id;
}

seven.onclick = function () {
    operation.innerText += this.id;
}

eight.onclick = function () {
    operation.innerText += this.id;
}

nine.onclick = function () {
    operation.innerText += this.id;
}

zero.onclick = function () {
    operation.innerText += this.id;
}

//change color palette
smiley.onclick = function () {

    var emojis = ["😊", "🤩", "😋", "😳", "🐶", "🐱", "🌈", "🍕"];
    var colors = ["#243441;", "#272444", "#2e393b", "#f7c9cf", "#f44b74", "#ff734f", "#ea9c9e"];
    var randomColor = colors[Math.floor(Math.random() * colors.length)];
    var randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
    document.getElementById('calculator').style.backgroundColor = randomColor;
    smiley.innerText = randomEmoji;

}
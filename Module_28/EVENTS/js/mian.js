var button1 = document.getElementById('btn1')
var button2 = document.getElementsByClassName

var button2 = document.getElementById('btn2')
var button3 = document.getElementById('btn3')
var button4 = document.getElementById('btn4')

button1.onclick = function(){
    alert ("hello from Button 1")
}

button2.onmouseover = function(){
    alert ("hello from Button 2")
}

button3.onmouseleave = function(){
    alert ("hello from Button 3")
}

// permes queryselector
var firstButton = document.querySelector('button')

firstButton.onclick = function(){
    alert ("hello from Query Selector");
}

var button3 = document.getElementById('btn3');
button3.addEventListener('click', function() {
    alert('hello from event listener btn3');
});

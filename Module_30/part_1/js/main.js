//conditionals
//if edhe else +++ else if

var x = 1;

if(x>2){
    console.log("Vlera e X me e madhe se 2");
}else{
    console.log("Vlera e X me e vogel se 2");
}


//<input type="text" id="input_id">
//<button id="btn_id">Show</button>
//<h1 id="text_id"></h1>

var input = document.getElementById('input_id');
var button = document.getElementById('btn_id');
var text = document.getElementById('text_id');

button.onclick = function(){
    //nese vlera e inputit eshte me e madhe se 10 texti qe shfaqet
    
    if(input.value > 10){
        text.innerHTML = "Input value is greater than 10";
    }else if(input.value < 10){
        text.innerHTML = "Input value is lower than 10";
    }else{
        text.innerHTML = "Input value is equal to 10";
    }
}

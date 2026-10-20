$("li").click(function(){
    alert("Clicked");
})

$("#btn").click(function(){
    $("#h1").text("Testing Text");
    $("#h1").append(" Extra Text");

})

$('#btn2').on('click', function(){
    console.log('Second button is clicked');
});

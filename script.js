$(document).ready(function() {
var timeTime = moment().format("MMM Do YYYY");
$("#currentDay").append(timeTime);
loadStorage();



function loadStorage(){
    $("#9Input").append(localStorage.getItem("9am"));
    $("#10Input").append(localStorage.getItem("10am"));
    $("#11Input").append(localStorage.getItem("11am"));
    $("#12Input").append(localStorage.getItem("12am"));
    $("#1Input").append(localStorage.getItem("1pm"));
    $("#2Input").append(localStorage.getItem("2pm"));
    $("#3Input").append(localStorage.getItem("3pm"));
    $("#4Input").append(localStorage.getItem("4pm"));
    $("#5Input").append(localStorage.getItem("5pm"));
    
      

}

$("#btnSave9").on("click", function(){
var form9 = $("#9Input").val()
localStorage.setItem("9am", JSON.stringify(form9));   
 
})

$("#btnSave10").on("click", function(){
var form10 = $("#10Input").val();
localStorage.setItem("10am", JSON.stringify(form10));
    
})

$("#btnSave11").on("click", function(){
var form11 = $("#11Input").val();
localStorage.setItem("11am", JSON.stringify(form11));
    
})

$("#btnSave12").on("click", function(){
var form12 = $("#12Input").val();
localStorage.setItem("12am", JSON.stringify(form12));
})

$("#btnSave1").on("click", function(){
var form1 = $("#1Input").val();
localStorage.setItem("1pm", JSON.stringify(form1))

})

$("#btnSave2").on("click", function(){
var form2 = $("#2Input").val();
localStorage.setItem("2pm", JSON.stringify(form2))

})

$("#btnSave3").on("click", function(){
var form3 = $("#3Input").val();
localStorage.setItem("3pm", JSON.stringify(form3))

})

$("#btnSave4").on("click", function(){
var form4 = $("#4Input").val();
localStorage.setItem("4pm", JSON.stringify(form4))

})

$("#btnSave5").on("click", function(){
var form5 = $("#5Input").val();
localStorage.setItem("5pm", JSON.stringify(form5))

})

})

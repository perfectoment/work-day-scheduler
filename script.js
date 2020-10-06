 $(document).ready(function() {
var timeTime = moment().format("MMM Do YYYY");
$("#currentDay").append(timeTime);
var hour = moment().format("HH"); 
var formBox = $(".col-10");
loadStorage();


// var hour = moment().format("HH");

// formBox = $(".col-10 hour")

// console.log(formBox)
// 


function loadStorage(){
    var objectKeys = [
        {
            id: "#09",
            key: "9am"
        },
        {
            id:"#10",
            key: "10am"
        },
        {
            id: "#11",
            key: "11am"
        },
        {
            id:"#12",
            key: "12am"
        },
        {
            id: "#13",
            key: "1pm"
        },
        {
            id:"#14",
            key: "2pm"
        },
        {
            id: "#15",
            key: "3pm"
        },
        {
            id:"#16",
            key: "4pm"
        },   {
            id: "#17",
            key: "5pm"
        }];
    for(var i =0; i < objectKeys.length; i++){
    if(localStorage.getItem(objectKeys[i].key) !== null){
    
       
    $(objectKeys[i].id).append(localStorage.getItem(objectKeys[i].key).replace(/['"]+/g, ''));
}
    // $("#10").append(localStorage.getItem("10am").replace(/['"]+/g, ''));
    // $("#11").append(localStorage.getItem("11am").replace(/['"]+/g, ''));
    // $("#12").append(localStorage.getItem("12am").replace(/['"]+/g, ''));
    // $("#13").append(localStorage.getItem("1pm").replace(/['"]+/g, ''));
    // $("#14").append(localStorage.getItem("2pm").replace(/['"]+/g, ''));
    // $("#15").append(localStorage.getItem("3pm").replace(/['"]+/g, ''));
    // $("#16").append(localStorage.getItem("4pm").replace(/['"]+/g, ''));
    // $("#17").append(localStorage.getItem("5pm").replace(/['"]+/g, ''));
    
    
    }

}


$("#btnSave9").on("click", function(){
var form9 = $("#09").val()
localStorage.setItem("9am", JSON.stringify(form9));   
 
})

$("#btnSave10").on("click", function(){
var form10 = $("#10").val();
localStorage.setItem("10am", JSON.stringify(form10));
    
})

$("#btnSave11").on("click", function(){
var form11 = $("#11").val();
localStorage.setItem("11am", JSON.stringify(form11));
    
})

$("#btnSave12").on("click", function(){
var form12 = $("#12").val();
localStorage.setItem("12am", JSON.stringify(form12));
})

$("#btnSave1").on("click", function(){
var form1 = $("#13").val();
localStorage.setItem("1pm", JSON.stringify(form1))

})

$("#btnSave2").on("click", function(){
var form2 = $("#14").val();
localStorage.setItem("2pm", JSON.stringify(form2))

})

$("#btnSave3").on("click", function(){
var form3 = $("#15").val();
localStorage.setItem("3pm", JSON.stringify(form3))

})

$("#btnSave4").on("click", function(){
var form4 = $("#16").val();
localStorage.setItem("4pm", JSON.stringify(form4))

})

$("#btnSave5").on("click", function(){
var form5 = $("#17").val();
localStorage.setItem("5pm", JSON.stringify(form5))
})


function colorChange(){
 for(var i = 0; i < formBox.length; i++){   
  if($(formBox[i]).attr("id") > hour) {
      $(formBox[i]).addClass("future");
  }
  else if ($(formBox[i]).attr("id") < hour) {
      $(formBox[i]).addClass("past");
  }
  else ($(formBox[i]).addClass("present"));
  console.log(hour)
}
 }
loadStorage();
colorChange();
})

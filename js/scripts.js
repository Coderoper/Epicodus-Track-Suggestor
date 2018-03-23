var companyName = parseInt($("#company").val());
var frontorback = parseInt($("#frontorback").val());
var classroom = parseInt($("#classroom").val());
var commitment = parseInt($("#commitment").val());
var interested = parseInt($("interested").val());



$(document).ready(function(){
  $("#allforms").submit(function(event){
    event.preventDefault();
    course(companyName)
  });
});

var course = function(companyName) {
  if (companyName === "1" && commitment === "10" && interested == "12") {
    alert("You should take C#");
    $('csharp').show();
  } else if (companyName === "2" && commitment === "10" && interested == "12") {
    alert("You should take Java");
    $('Java').show();
  } else if(companyName === "4" && commitment === "10" && interested == "12") {
    alert("You should take Ruby");
    $('PHP').show();
  } else {
    alert("you shouldn't take any classes")
  };

  // } else if (companyName === "3" && commitment === "10" && interested == "12") {
  //   alert("You should take PHP")
  // } else if (companyName === "4" && commitment === "10" && interested == "12") {
  //   alert("You should take Ruby")
  // } else {
  //   alert("There are no classes for you")
  // };
};

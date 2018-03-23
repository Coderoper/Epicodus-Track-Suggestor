$(document).ready(function(){
  $("#company").submit(function(event){
    event.preventDefault();
    course(companyName)
  });

});
var companyName = parseInt($("#company").val());
var course = function(companyName) {
  if (companyName === '1') {
    alert("You should take C#")
  } else if (companyName === "Google") {
    alert("You should take Java")
  } else if (companyName === "government") {
    alert("You should take PHP")
  } else if (companyName === "startup") {
    alert("You should take Ruby")
  } else {
    alert("There are no classes for you")
  };
};




// var course =function(companyName){
//   // if (companyName === 1){}
//   alert("Microsoft!");
// };
// $(document).ready(function(){
//   var companyName = parseInt($("#company").val());
//   $('#company').change(function(event){
//     event.preventDefault();
//
//     alert("hi1");
//     course(companyName);
//     alert("hi2");
//   });
// });

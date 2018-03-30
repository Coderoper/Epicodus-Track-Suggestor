var company;
var where;
var committed;
var interest;
var friend;


function getValues(){
company = $("#company").val();
where = $("#classroom").val();
committed = $("#commitment").val();
interest = $("#interested").val();
friend = $("#friends").val();
};

function course(){
  if (company === "microsoft" && committed === "yes" && interest === "yes" && friend === "yes"){
    alert("You should take C#/.NET");
    $("#Csharp").show();
  }
  if (company === "google" && committed === "yes" && interest === "yes" && friend === "yes"){
    alert("You should take Java/Android");
    $("#Java").show();
  }
  if (company === "gov" && committed === "yes" && interest === "yes" && friend === "yes"){
    alert("You should take PHP");
    $("#PHP").show();
  }
  if (company === "startup" && committed === "yes" && interest === "yes" && friend === "yes"){
    alert("You should take Ruby/Rails")
    $("#Ruby").show();
  // } else{
  //   alert("You should not enroll")
  //   $("#Not").show()
  }

  };

$(document).ready(function() {
  $("#form1").submit(function(event) {
    event.preventDefault();
    getValues();
    course();
    console.log(company);
});
});

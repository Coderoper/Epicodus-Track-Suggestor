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
  if (company == 0 || where == 0 || committed == 0 || interest == 0 || friend == 0){
    alert("Please select an option from each box")
  }
  if (company === "microsoft" && committed === "yes" && interest === "yes" && friend === "yes"){
    // alert("You should take C#/.NET");
    $("#cSharp").show();
  }
  if (company === "google" && committed === "yes" && interest === "yes" && friend === "yes"){
    // alert("You should take Java/Android");
    $("#java").show();
  }
  if (company === "gov" && committed === "yes" && interest === "yes" && friend === "yes"){
    // alert("You should take PHP");
    $("#php").show();
  }
  if (company === "startup" && committed === "yes" && interest === "yes" && friend === "yes"){
    // alert("You should take Ruby/Rails")
    $("#ruby").show();
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

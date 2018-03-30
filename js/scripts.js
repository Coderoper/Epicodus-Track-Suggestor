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
    alert("You should take C#/.NET")
  }
  if (company === "google" && committed === "yes" && interest === "yes" && friend === "yes"){
    alert("You should take Java/Android")
  }
  if (company === "gov" && committed === "yes" && interest === "yes" && friend === "yes"){
    alert("You should take PHP")
  }
  if (company === "startup" && committed === "yes" && interest === "yes" && friend === "yes"){
    alert("You should take Ruby/Rails")
  } else{
    alert("You should not enroll")
  }
  
  };

  // if(company === "google" && committed === "yes" && interested === "yes" && friends === "yes") {
  //   alert("You should take Java")
  // };

//
//   } else if (classroom === "2" && commitment === "10" && interested == "12") {
//     alert("You should take Java");
//     $('Java').show();
//   } else if(companyName === "4" && commitment === "10" && interested == "12") {
//     alert("You should take Ruby");
//     $('PHP').show();
//   } else {
//     alert("you shouldn't take any classes")
//   };
//
//
// };

$(document).ready(function() {
  $("#form1").submit(function(event) {
    event.preventDefault();
    getValues();
    course();
    console.log(company);
    // course(companyName);
    // c
  });
});

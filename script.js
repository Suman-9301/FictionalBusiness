
//to display current year in copyright section
var date = new Date().getFullYear();
var year = document.getElementById('year');
year.textContent = (date);


function validateForm() {
    let name = document.forms["myForm"]["name"].value;
    let email = document.forms["myForm"]["email"].value;
    let subject = document.forms["myForm"]["subject"].value;
    let message = document.forms["myForm"]["message"].value;

    //name validation
    if (name == "") {
      alert("Name must be filled out");
      return false;
    }


    //email validation
    if (email == "") {
        alert("Email must be filled out");
        return false;
    }

    //subject validation
    if (subject == "") {
        alert("Subject must be filled out");
        return false;
    }

    //message validation
    if (message == "") {
        alert("Message must be filled out");
        return false;
    }



  }


function data() {
  //e.preventDefault();

  alert("HI");

  var firstName = document.getElementById("fname").value;
  var lastName = document.getElementById("lname").value;
  var address = document.getElementById("address").value;
  var gender = "MALE";
  //var form_ = document.getElementById("name").value;

  if (firstName == null || lastName == null || address == null || gender == null) {
    alert("field can not be empty");
  }

  localStorage.setItem("FNAME", firstName);
  localStorage.setItem("LNAME", lastName);
  localStorage.setItem("ADDRESS", address);
  localStorage.setItem("GENDER", gender);
  //localStorage.setItem("form",form_);


  window.location.assign("authenTIcationPage1.html");
}


function logout() {

  firebase.auth().signOut().then(() => {
    // Sign-out successful.
    alert("LogOut");
    window.location.assign("homePage.html");
  }).catch((error) => {
    // An error happened.
    alert(error);
  });

}
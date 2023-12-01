
var contactFromDb = firebase.database().ref('new-form');
var auth = firebase.auth();

window.onload=function(){
   render();
};

function render(){
   window.RecaptchaVerifier = new firebase.auth.RecaptchaVerifier("recaptcha-container");
   RecaptchaVerifier.render();
}

function phoneAuth(){
   var number = document.getElementById('number').value ;
   number = "+91" + number;
   firebase.auth().signInWithPhoneNumber(number,window.RecaptchaVerifier).then(function (confirmationResult){
    window.confirmationResult = confirmationResult;
    coderesult = confirmationResult;
    console.log(coderesult);
    alert("message sent");
    document.getElementById('sender').style.display = 'none';
    document.getElementById('recciver').style.display = 'block';
}).catch(function (error){
   alert("sorry");
});

}

function codeverify(){

   var code = document.getElementById('verificationcode').value;
   coderesult.confirm(code).then(function (result){
      alert("Sucessifully registered");
      document.getElementById('sender').style.display = 'none';
      var user = result.user;
      console.log(user);

      var FIRSTNAME = localStorage.getItem("FNAME");
      var LASTNAME = localStorage.getItem("LNAME");
      var ADDR = localStorage.getItem("ADDRESS");
      var SEX = localStorage.getItem("GENDER");
      var user = auth.currentUser;
      var new_id = firebase.auth().currentUser.uid;
      var newContactFrom = contactFromDb.child(new_id);
      
    
    newContactFrom.set(
        {
              
               FIRST_NAME : FIRSTNAME,
               LAST_NAME : LASTNAME,
               ADDRESS_ : ADDR,
               SEX_ :SEX,
               
        }
    );
      window.location.assign("./homePage.html");
      

   }).catch(function (error){
        alert(error);
   });
}


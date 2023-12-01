

window.onload=function(){
    render();
 };
 
 function render(){
    window.RecaptchaVerifier = new firebase.auth.RecaptchaVerifier("recaptcha-container");
    RecaptchaVerifier.render();
 }
 
 function phoneAuth(){
    var number = document.getElementById('phoneNumber').value ;
    number = "+91" + number;
    firebase.auth().signInWithPhoneNumber(number,window.RecaptchaVerifier).then(function (confirmationResult){
     window.confirmationResult = confirmationResult;
     coderesult = confirmationResult;
     console.log(coderesult);
     alert("message sent");
   document.getElementById('sender').style.display = 'none';
   document.getElementById('verifier').style.display = 'block';
 }).catch(function (error){
    alert("sorry");
 });
 
 }

 function codeverify(){
   

    var code = document.getElementById('code').value;
    coderesult.confirm(code).then(function (result){
      document.getElementById('sender').style.display = 'none';
     
       alert("Sucessifully registered");
       var user = result.user;
       console.log(user);
       window.location.assign("welcome.html");
 
    }).catch(function (error){
         alert(error);
    });
 }

 var auth = firebase.auth();



 
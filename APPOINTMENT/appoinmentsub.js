
function data() {
    var doctor = document.getElementById("name").value;
    window.localStorage.setItem("DOCTOR", doctor);
    window.location.assign("payment.html");
}
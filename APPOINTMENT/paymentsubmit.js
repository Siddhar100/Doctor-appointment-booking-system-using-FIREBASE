
function uploadImage() {

    var doctor_ = window.localStorage.getItem("DOCTOR");
    var contactFromDb = firebase.database().ref(doctor_);
    const ref = firebase.storage().ref();
    const file = document.querySelector("#slip").files[0];
    const name = +new Date() + "-" + file.name;
    const metadata = {
        contentType: file.type
    };
    const task = ref.child(name).put(file, metadata); task
        .then(snapshot => snapshot.ref.getDownloadURL())
        .then(url => {
            console.log(url);

            //document.querySelector("#image").src = url;
            var new_id = firebase.auth().currentUser.uid;
            alert("please note this uid: " + new_id);
            var newContactFrom = contactFromDb.child(new_id);

            newContactFrom.set(
                {

                    User_Id: new_id,
                    payment_slip: url,


                }
            );
            window.location.assign("welcome.html");
        })
        .catch(console.error);
}


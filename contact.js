let firebaseConfig = {
    apiKey: "AIzaSyBAjCTpQmZRsy3V-yMTsmmrF3AzUcWCFxg",
    authDomain: "localhost",
    projectId: "abcd-40ecd",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
let db = firebase.firestore();

$('button').click(() => {
    if (validate()) {
        db.collection("USers").add({
            firstname: $('#firstname').val(),
            lastname: $('#lastname').val(),
            email: $('#email').val(),
            massage: $('#massage').val(),         
        })
        .then(function (docRef) {
            console.log("Document written with ID: ", docRef.id);
            $('#firstname').val('')
            $('#lastname').val('')
            $('#email').val('')
            $('#massage').val('')
        })
        .catch(function (error) {
            console.error("Error adding document: ", error);
        });
    }
});

db.collection("USers").onSnapshot(doc=>{
    let table = $('tbody')[0]
    $("tbody tr").remove();
    
    doc.forEach(item=>{
        let row= table.insertRow(-1)
        let firstcell =row.insertCell(0)
        let secondcell =row.insertCell(1)
        let thirdcell =row.insertCell(2)
        let fourthcell = row.insertCell(3)
        firstcell.textContent=item.data().firstname
        secondcell.textContent=item.data().lastname
        thirdcell.textContent=item.data().email
        fourthcell.textContent=item.data().massage
    })
})

function validate() {
    let fname = document.myForm.firstname.value;
    let lname = document.myForm.lastname.value;
    let email = document.myForm.email.value;
    let msg = document.myForm.massage.value;

    if (fname === '') {
        alert('Please input your FirstName !');
        document.myForm.firstname.focus();
        return false;
    }

    if (lname === '') {
        alert('Please input your LastName !');
        document.myForm.lastname.focus();
        return false;
    }

    if (email === '' || !validateEmail(email)) {
        alert('Please input your Email !');
        document.myForm.email.focus();
        return false;
    }

    if (msg === '') {
        alert('Please input your Massage !');
        document.myForm.massage.focus();
        return false;
    }

    return true;
}

let validateEmail = (email) => {
    atpos = email.indexOf('@');
    dotpos = email.lastIndexOf('.');

    if (atpos < 1 || (dotpos-atpos) < 2) {
        document.myForm.email.focus();
        return false;
    }
    return true;
}
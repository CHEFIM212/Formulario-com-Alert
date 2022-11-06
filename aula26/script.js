function Enviar() {

    var nome = document.getElementById("nameid");
    var email = document.getElementById("emailid");
    var phone = document.getElementById("phoneid");

    if (phone.value != "") {
        alert(' Confirm Name: ' + nome.value)
        alert(' Confirm Email: ' + email.value) 
        alert(' Confirm Phone: ' + phone.value)
    }

}
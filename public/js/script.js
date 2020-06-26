function validate() {
    let email = document.getElementById("inputEmail4").value;

    let label = document.getElementById("check");

    let regexp = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
    if (regexp.test(email)) {
        label.innerHTML = "valid ";

        label.style.color = "green";

        label.style.visibility = "visible";
        return true;
    } else {


        label.innerHTML = "Enter valid email";

        label.style.color = "red";

        label.style.visibility = "visible";
        return false;
    }
}
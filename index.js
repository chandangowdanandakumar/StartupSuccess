let success = true
const submit = document.getElementById("submit")

function submitButton() {
    let alert_success = document.querySelector(".alert-success")
    let alert_danger = document.querySelector(".alert-danger")
    const input = document.getElementsByClassName('form-control');

    for (let index = 0; index < input.length; index++) {
        const element = input[index];
        console.log(element.value)
    }

    if (success) {
        alert_success.hidden = false
    }
    else {
        alert_danger.hidden = false
    }
}
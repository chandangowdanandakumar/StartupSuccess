// let success = true
const submit = document.getElementById("submit")

function submitButton() {
    let alert_success = document.querySelector(".alert-success")
    let alert_danger = document.querySelector(".alert-danger")
    let NoOfEmp = document.querySelector('#NumEmp')
    const input = document.getElementsByClassName('form-control');

    for (let index = 0; index < input.length; index++) {
        const element = input[index];
        console.log(element.value)
    }

    if (NoOfEmp.value > 500) {
        alert_success.hidden = false
        alert_danger.hidden = true
    }
    else {
        alert_success.hidden = true
        alert_danger.hidden = false
        
    }
}   
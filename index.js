let success = true
const submit = document.getElementById("submit")

if (submit) {
    console.log('chandan')
    submit.addEventListener("click", (e) => {
        console.log('chandan')
        // console.log(e)
        // console.log(alert_success)
        // console.log(alert_danger)
    })
}

function submitButton(){
    // debugger
    let alert_success = document.querySelector(".alert-success")
    let alert_danger = document.querySelector(".alert-danger")
    
    if(success){
        alert_success.hidden = false
    }
    else{
        alert_danger.hidden = false
    }
}
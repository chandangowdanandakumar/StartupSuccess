// let success = true
const submit = document.getElementById("submit")


$(function(){
    $('#submit').click(function(){

        let alert_success = document.querySelector(".alert-success")
        let alert_danger = document.querySelector(".alert-danger")
        let name = document.querySelector('#name').value
        let area = document.querySelector('#area').value
        let industry = document.querySelector('#industry').value
        let NoOfEmp = document.querySelector('#NumEmp').value
        let AvgWage = document.querySelector('#AvgWage').value
        input = []
        input.push(name)
        input.push(area)
        input.push(industry)
        input.push(NoOfEmp)
        input.push(AvgWage)
        const data = JSON.stringify({"result":input})

        $.ajax({
            type: 'POST',
            url: '/predict',
            data: data,
            contentType: false,
            processData: false
        })
    })
})
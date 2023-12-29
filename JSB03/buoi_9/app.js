var password = document.getElementById('password')
var span = document.querySelector("span")
var password_1 = document.getElementById('password_signup')

password.onchange = function (e) {
    var value = e.target.value
    if (value.length < 6) {
        span.innerText = "*Hãy nhập trên 6 kí tự"
    }
    else {
        span.innerText = ""
    }
}
password_1.onchange = function (e1) {
    var value_1 = e1.target.value
    if (value_1.length < 6) {
        span.innerText = "*Hãy nhập trên 6 kí tự"
    }
    else {
        span.innerText = ""
    }
}
var calulator = document.getElementById("output")
var ac = document.getElementById("c")
var divide = document.getElementById("/")
var one = document.getElementById("1")
var two = document.getElementById("2")
var three = document.getElementById("3")
var multiple = document.getElementById("*")
var four = document.getElementById("4")
var five = document.getElementById("5")
var six = document.getElementById("6")
var mins = document.getElementById("-")
var seven = document.getElementById("7")
var eight = document.getElementById("8")
var nine = document.getElementById("9")
var plus = document.getElementById("+")
var zero = document.getElementById("0")
var equal = document.getElementById("=")

var inputHandler = function (e) {
    calulator.value += e.target.innerHTML
}
var operaterHandler = function (e) {
    let input = calulator.value // 1+2 ,1-2
    if (input.indexOf('/') > -1 || input.indexOf('*') > -1 || input.indexOf('+') > -1 || input.indexOf('-') > -1) {
       return
    }

    calulator.value += e.target.innerHTML
}


divide.addEventListener("click", operaterHandler)
one.addEventListener("click", inputHandler)
two.addEventListener("click", inputHandler)
three.addEventListener("click", inputHandler)
multiple.addEventListener("click", operaterHandler)
four.addEventListener("click", inputHandler)
five.addEventListener("click", inputHandler)
six.addEventListener("click", inputHandler)
mins.addEventListener("click", operaterHandler)
seven.addEventListener("click", inputHandler)
eight.addEventListener("click", inputHandler)
nine.addEventListener("click", inputHandler)
plus.addEventListener("click", operaterHandler)
zero.addEventListener("click", inputHandler)

ac.addEventListener("click", function (e) {
    calulator.value = ""
})



equal.addEventListener("click", function (e) {
    let input = calulator.value
    let operater
    if (input.indexOf('/') > -1) {
        operater = "/"
        input = input.split("/")
    }
    else if (input.indexOf('*') > -1) {
        operater = "*"
        input = input.split("*")
    }
    else if (input.indexOf('+') > -1) {
        operater = "+"
        input = input.split("+")
    }
    else if (input.indexOf('-') > -1) {
        operater = "-"
        input = input.split("-")
    }
    let result
    switch (operater) {
        case "/":
            result = input[0] / input[1]
            break;
        case "*":
            result = input[0] * input[1]
            break;
        case "+":
            result = parseInt(input[0]) + parseInt(input[1])
            break;
        case "-":
            result = input[0] - input[1]
            break;
    }
    // console.log("input", input)
    calulator.value = result

})

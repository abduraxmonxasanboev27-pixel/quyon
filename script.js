
let x = 0
let y = 0

let quyon = document.getElementById("q")
let sabzi = document.getElementById("s")

function sabziuchun() {
    if(y>100 && y<300 && x>350 && y<650 ){
        sabzi.style.top = "400px"
        sabzi.style.left = "200px"
    }
    else if(y>300 && y<500 && x>50 && x<250) {
        sabzi.style.top = "300px"
        sabzi.style.left = "600px"
    }
}

function ong() {
    if (x < 600) {
        x += 20
        quyon.style.marginLeft = x + "px"
        quyon.style.transform = "rotateY(0deg)"
        sabziuchun()
    }
}

function chap() {
    if (x > 0) {
        x -= 20
        quyon.style.marginLeft = x + "px"
        quyon.style.transform = "rotateY(180deg)"
        sabziuchun()
    }
}

function past() {
    if(y < 430 ) {
        y += 20
        quyon.style.marginTop = y + "px"
        sabziuchun()
    }
}

function tepa() {
    if(y > 0 ) {
        y -= 20
        quyon.style.marginTop = y + "px"
        sabziuchun()
    }
}
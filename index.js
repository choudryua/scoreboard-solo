let home = 0 
let guest = 0

let homeScore = document.getElementById("sum-home")
let guestScore = document.getElementById("sum-guest")


// HOME

function oneHome() {
    home += 1
    homeScore.innerText = home %=100
}

function twoHome() {
    home += 2
    homeScore.innerText = home %=100
}

function threeHome() {
    home += 3
    homeScore.innerText = home %=100
}


// GUEST

function oneGuest() {
    guest += 1
    guestScore.innerText = guest %=100
}


function twoGuest() {
    guest += 2
    guestScore.innerText = guest %=100
}


function threeGuest() {
    guest += 3
    guestScore.innerText = guest %=100
}


function myFunction(guess) {
    var coin = document.getElementById("coin")
    var heads = document.getElementById("heads")
    var tails = document.getElementById("tails")
    var result = document.getElementById("result")

    coin.style.display = "none"
    heads.style.display = "none"
    tails.style.display = "none"
    result.style.display = "none"

    var tossNum = Math.floor(Math.random() * 2)
    var toss = ""

    coin.style.display = "flex"
    if (tossNum == 0) {
        toss = "Heads"
        heads.style.display = "flex"
    } else {
        toss = "Tails"
        tails.style.display = "flex"
    }

    result.style.display = "inline"
    if (toss == guess) {
        result.innerHTML = "You win!"
    } else {
        result.innerHTML = "You lose!"
    }
}

let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")

let count = 0

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}

function increment() {
    count += 1
    countEl.textContent = count
}

document.getElementById("save-btn").addEventListener("click", save);
document.getElementById("increment-btn").addEventListener("click",increment);

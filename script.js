const password = document.querySelector(".password")
const vision = document.querySelector(".vision")
const msg = document.querySelector(".message")
const str = document.querySelector(".strength")

vision.addEventListener("click", () => {
    if (vision.classList.contains("see")) {
        vision.classList.remove("see")
        password.type = "password"
    } else {
        vision.classList.add("see")
        password.type = "text"
    }
})

password.addEventListener("input", () => {
    if (password.value.length > 0) {
        msg.style.display = "block"
    } else {
        msg.style.display = "none"
    }

    if (password.value.length < 4) {
        str.innerHTML = "weak"
        password.style.borderColor = "#ff5925"
        msg.style.color = "#ff5925"
    } else if (password.value.length >= 4 && password.value.length < 8) {
        str.innerHTML = "medium"
        password.style.borderColor = "yellow"
        msg.style.color = "yellow"
    } else if (password.value.length >= 8) {
        str.innerHTML = "strong"
        password.style.borderColor = "#26d730"
        msg.style.color = "#26d730"
    } 
})
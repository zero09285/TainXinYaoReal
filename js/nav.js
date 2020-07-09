var burgar = document.querySelector(".burgar_btn")
var nav = document.querySelector(".navBar")

burgar.onclick = function () {
    if (nav.className.indexOf('nav_active') == -1) {
        nav.classList.add("nav_active")

    } else {
        nav.classList.remove("nav_active")
    }
}



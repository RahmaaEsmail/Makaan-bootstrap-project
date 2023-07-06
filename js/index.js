function changeNavBar() {
    if (window.pageYOffset === 0)
        document.querySelector('.navbar').classList.remove("sticky-navbar")
    else
        document.querySelector('.navbar').classList.add("sticky-navbar")
}

window.addEventListener('scroll',changeNavBar)
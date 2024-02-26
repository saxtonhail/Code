function scrollValue() {
    var navbar = document.getElementById('navbar');
    var scroll = window.scrollY;
    if (scroll < 1935) {
        navbar.classList.remove('BgColour');
    } else {
        navbar.classList.add('BgColour');
    }
}

window.addEventListener('scroll', scrollValue);
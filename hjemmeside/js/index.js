function scrollValue() {
    var topnav = document.getElementById('topnav');
    var scroll = window.scrollY;
    if (scroll < 825) {
        topnav.classList.remove('BgColour');
    } else {
        topnav.classList.add('BgColour');
    }
}


window.addEventListener('scroll', scrollValue);
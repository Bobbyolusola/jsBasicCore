function goToTop() {
    console.log('click')
    window.scrollTo(0, 0);
}

window.addEventListener('scroll', function () {
    document.getElementById('showScroll').innerHTML = window.scrollY + 'px';

    if(window.scrollY < 300){
        document.getElementById('showScroll').style.color = "red";
    }
    if(window.scrollY >= 300 && window.scrollY < 1000){
        document.getElementById('showScroll').style.color = "blue";
    }
    if(window.scrollY >=  1000){
        document.getElementById('showScroll').style.color = "green";
    }
});
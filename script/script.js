// add class navbarDark on navbar scroll
const header = document.querySelector('.navbar');

window.onscroll = function() {
    var top = window.scrollY;
    if(top >=100) {
        header.classList.add('navbarDark');
    }
    else {
        header.classList.remove('navbarDark');
    }
}

function playVideo() {
    var video = document.getElementById('my-video');
    video.play();
    document.querySelector('.play-button').style.display = 'none';
  }
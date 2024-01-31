function DropDown() {
    const navbarLinks = document.querySelector('.dropMenu');
    navbarLinks.classList.toggle('show');
}

var Team = document.getElementById("Team");
var events = document.getElementById("Events");
var theme = document.getElementById('Theme');
var punarutthan = document.getElementById("2024");
var avantGrande = document.getElementById("2021");
var takeLeap = document.getElementById("2020");
var punarutthan2 = document.getElementById("punarutthan");
var avantGarde2 = document.getElementById("avant");
var takeLeap2 = document.getElementById("leap");
var Home = document.getElementById("Home")



Team.addEventListener('click', function (event) {
    event.preventDefault();
    window.location.href = 'team.html'
});

theme.addEventListener('click', function (event) {
    event.preventDefault();
    window.location.href = 'theme.html'
});

punarutthan.addEventListener('click', function (event) {
    event.preventDefault();
    window.location.href = '2024-events.html'
});

punarutthan2.addEventListener('click', function (event) {
    event.preventDefault();
    window.location.href = '2024-events.html'
});

avantGrande.addEventListener('click', function (event) {
    event.preventDefault();
    window.location.href = '2021-events.html'
});

avantGarde2.addEventListener('click', function (event) {
    event.preventDefault();
    window.location.href = '2021-events.html'
});

takeLeap.addEventListener('click', function (event) {
    event.preventDefault();
    window.location.href = '2020-events.html'
});

takeLeap2.addEventListener('click', function (event) {
    event.preventDefault();
    window.location.href = '2020-events.html'
});

Home.addEventListener('click', function (event) {
    event.preventDefault();
    window.location.href = 'index.html'
});

function redirectToForm() {
    window.location.href = "https://forms.gle/XoAvwXA2T8JQbdXU8";
}

function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  // Show/hide the button based on scroll position
  window.onscroll = function() {
    var scrollToTopBtn = document.getElementById('scroll-to-top');
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      scrollToTopBtn.style.display = 'flex';
    } else {
      scrollToTopBtn.style.display = 'none';
    }
  };


function toggleNavbar() {
    const navbarLinks = document.querySelector('.topBar_options');
    navbarLinks.classList.toggle('show');
}

function toHome() {
    window.location.href = 'index.html'
}
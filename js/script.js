$(document).ready(function() {
    var aboutMeSection = $('.about_us');
    var speakerSection = $('.speakers');
    var teamSection = $('.team');
    var goalsSection = $('.goals');


    $(window).scroll(function() {
        var windowHeight = $(window).height();
        var scrollPos = $(window).scrollTop();
        var aboutMePos = aboutMeSection.offset().top;
        var speakerPos = speakerSection.offset().top;
        var teamPos = teamSection.offset().top;
        var goalsPos = goalsSection.offset().top;

        // Adjust the 200 value based on your layout
        if (scrollPos > aboutMePos - windowHeight ) {
            aboutMeSection.addClass('show');
        }
        else{
            aboutMeSection.removeClass('show');
        }

        if (scrollPos > goalsPos - windowHeight ) {
            goalsSection.addClass('show');
        }
        else{
            goalsSection.removeClass('show');
        }

        if (scrollPos > speakerPos - windowHeight ) {
            speakerSection.addClass('show');
        }
        else{
            speakerSection.removeClass('show');
        }

        if (scrollPos > teamPos - windowHeight ) {
            teamSection.addClass('show');
        }
        else{
            teamSection.removeClass('show');
        }
    
    });
});


function toggleNavbar() {
    const navbarLinks = document.querySelector('.topBar_options');
    navbarLinks.classList.toggle('show');
}

function DropDown() {
    const navbarLinks = document.querySelector('.dropMenu');
    navbarLinks.classList.toggle('show');
}

var Team = document.getElementById("Team");
var events = document.getElementById("Events");
var theme = document.getElementById('Theme');
var fullTeam = document.getElementById("fullTeam");
var punarutthan = document.getElementById("2024");
var avantGrande = document.getElementById("2021");
var takeLeap = document.getElementById("2020");
var punarutthan2 = document.getElementById("punarutthan");
var avantGarde2 = document.getElementById("avant");
var takeLeap2 = document.getElementById("leap");



Team.addEventListener('click', function (event) {
    event.preventDefault();
    window.location.href = 'team.html'
});

fullTeam.addEventListener('click', function (event) {
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

Home.addEventListener('click' , function(event){
    event.preventDefault();
    window.location.href = 'index.html'
});

function redirectTeam() {
    window.location.href = 'team.html'
    
}


document.addEventListener("DOMContentLoaded", function() {
    var visitMeElement = document.getElementById("tickets");

    if (visitMeElement) {
        visitMeElement.scrollIntoView({ behavior: 'smooth' });
    }
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



function toHome() {
    window.location.href = 'index.html'
}


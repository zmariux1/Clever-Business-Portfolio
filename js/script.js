// Replace Text In Header
const checkReplace = document.querySelector('.replace-me');

if (checkReplace !== null) {
  const replace = new ReplaceMe(checkReplace, {
    animation: 'animated fadeIn',
    speed: 2000,
    separator: ',',
    loopCount: 'infinite',
    autoRun: true,
  });
}

// User Scroll For Navbar
function userScroll() {
  const navbar = document.querySelector('.navbar');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('bg-dark');
      navbar.classList.add('border-bottom');
      navbar.classList.add('border-secondary');
      navbar.classList.add('navbar-sticky');
    } else {
      navbar.classList.remove('bg-dark');
      navbar.classList.remove('border-bottom');
      navbar.classList.remove('border-secondary');
      navbar.classList.remove('navbar-sticky');
    }
  });
}

document.addEventListener('DOMContentLoaded', userScroll);

// Video Modal
const videoBtn = document.querySelector('.video-btn');
const videoModal = document.querySelector('#videoModal');
const video = document.querySelector('#video');
let videoSrc;

if (videoBtn !== null) {
  videoBtn.addEventListener('click', () => {
    videoSrc = videoBtn.getAttribute('data-bs-src');
  });
}

if (videoModal !== null) {
  videoModal.addEventListener('shown.bs.modal', () => {
    video.setAttribute(
      'src',
      videoSrc + '?autoplay=1;modestbranding=1;showInfo=0'
    );
  });

  videoModal.addEventListener('hide.bs.modal', () => {
    video.setAttribute('src', videoSrc);
  });
}


// ===================== Scroll Reveal ===================== 


ScrollReveal({
  reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200
});

ScrollReveal().reveal("", { origin: "top" });
ScrollReveal().reveal(".partners, .animatedD p", { origin: "bottom" });
ScrollReveal().reveal(".header", { origin: "left" });
ScrollReveal().reveal("", { origin: "right" });



// portfolio delay presentation  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
ScrollReveal({
  reset: true,
  distance: "80px",
  duration: 2000,
  delay: 600
});
ScrollReveal().reveal(".partners img", { origin: "bottom" });
ScrollReveal().reveal("header .container h2, .contact ul, .details ul", { origin: "left" });
ScrollReveal().reveal(".details-2 ul", { origin: "right" });


ScrollReveal({
  reset: true,
  distance: "80px",
  duration: 2000,
  delay: 800
});
ScrollReveal().reveal("header .container h1, myContacts", { origin: "left" });


ScrollReveal({
  reset: true,
  distance: "80px",
  duration: 2000,
  delay: 900
});
ScrollReveal().reveal("", { origin: "bottom" });
ScrollReveal().reveal("header .container p, header .container a", { origin: "left" });

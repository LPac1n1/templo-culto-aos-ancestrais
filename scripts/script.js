
// Show mobile navbar
const navbar = document.getElementById('navbar')
const navList = document.getElementById('nav-list')

navList.onclick = () => {
  navbar.classList.toggle('hide')
}

// Hide navbar with scroll down, and show with scroll up
let lastScroll = 0;
window.addEventListener("scroll", () => {
  let currentScroll = window.scrollY;

  if (currentScroll - lastScroll > 0) {
    navbar.classList.add("scroll-down");
    navbar.classList.remove("scroll-up");
  } else {
    navbar.classList.add("scroll-up");
    navbar.classList.remove("scroll-down");
  }

  if (currentScroll == 0) {
    navbar.classList.remove("scroll-up");
  }

  lastScroll = currentScroll;
})

// Realocate Social Medias on the priestness section
const socialMedia = document.getElementById('social-media')
const tpText = document.getElementById('tp-text')
const windowWidth = window.screen.width;

if (windowWidth >= 1024) {
  tpText.appendChild(socialMedia)
}

// Rituals slider
const carousel = document.querySelector('.carousel')
const arrowBtns = document.querySelectorAll('[data-chevron]')
let firstCardWidth = carousel.querySelector('.card').offsetWidth + 32

window.addEventListener('resize', () => {
  firstCardWidth = carousel.querySelector('.card').offsetWidth + 32
})

arrowBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    carousel.scrollLeft += btn.id === "arrow-left" ? -firstCardWidth : firstCardWidth
  })
})

// Show more photos on 'See More' button click
const seeMoreBtn = document.querySelector('#see-more-photos')
const seeLessBtn = document.querySelector('#see-less-photos')
const photos = document.querySelectorAll('[data-photo]')
const seeMorePhotos = document.querySelectorAll('.see-more-photo')

seeMoreBtn.onclick = () => {
  seeLessBtn.style.display = 'flex'
  seeMoreBtn.style.display = 'none'

  for(let i = 0; i < photos.length; i++) {
    photos[i].classList.remove('hide')
  }

  for(let i = 0; i < seeMorePhotos.length; i++) {
    seeMorePhotos[i].style.display = 'block'
  }
}

seeLessBtn.onclick = () => {
  seeLessBtn.style.display = 'none'
  seeMoreBtn.style.display = 'flex'

  for(let i = 0; i < photos.length; i++) {
    photos[i].classList.add('hide')
  }

  for(let i = 0; i < seeMorePhotos.length; i++) {
    seeMorePhotos[i].style.display = 'none'
  }
}
// OPENS AND CLOSES MENU WHEN CLICKING THE HAMBURGER ICON (USUALLY MOBILE)
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for(const element of toggle)
{
  element.addEventListener('click', function() {
    nav.classList.toggle('show')
  })
}

// CLOSES THE MENU AFTER CLICKING AT AN ITEM

const links = document.querySelectorAll('nav ul li a')

for(const link of links)
{
  link.addEventListener('click', function(){
    nav.classList.remove('show')
  })
}

//BOX SHADOW AT THE MENU AFTER SCROLLING
const header = document.querySelector('#header')
const navHeight = header.offsetHeight

function changeHeaderWhenScroll() {

  if (window.scrollY >= navHeight) {
    header.classList.add('scroll')
  } else {
    header.classList.remove('scroll')
  }
}


//ACTIVE MENU AFTER SCROLLING
const sections = document.querySelectorAll('main section[id]')
function activateMenuAtCurrentSection() {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4
  
  for (const section of sections) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    const checkpointStart = checkpoint >= sectionTop
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight

    if (checkpointStart && checkpointEnd) {
      document
      .querySelector('nav ul li a[href*=' + sectionId + ']')
      .classList.add('active')
    } else {
      document
      .querySelector('nav ul li a[href*=' + sectionId + ']')
      .classList.remove('active')
    }
  }
}




//WHAT HAPPENS WHEN YOU SCROLL

window.addEventListener('scroll', function() {
  changeHeaderWhenScroll ()
  activateMenuAtCurrentSection()
})

//SCROLL REVIEW ITEMS


const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  `#home .image, #home .text,
  #about .image, #about .text,
  #menu header, #menu .card,
  #deliveries header, #deliveries .raio,
  #orders .text, #orders .links,
  footer .brand
  `, {interval: 100})
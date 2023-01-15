let explore = document.querySelector('#explore')

window.addEventListener('resize', () => {
  let larguraTela = document.documentElement.clientWidth
  if (larguraTela > 1198) {
    explore.addEventListener('mouseover',() => {
      explore.style.transitionDuration = '1s'    
      explore.style.marginLeft = '0px'
  })

    explore.addEventListener('mouseout',() => {
      explore.style.marginLeft = '0px'
  })
    
  }
  else if (larguraTela < 1197) {
    explore.addEventListener('mouseover',() => {
    explore.style.transitionDuration = '1s'    
    explore.style.marginLeft = '-320px'
  })
  explore.addEventListener('mouseout',() => {    
      explore.style.marginLeft = '13px'
  })
  }
})

var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl)
})

const mediaQuery = window.matchMedia('(min-width: 768px)')

$('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
  });
  $('.slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: true,
    centerMode: true,
    focusOnSelect: true
  });

  

// HEADER
const formSearchBtn = document.querySelector('.form-search__btn');
const formSearch = document.querySelector('.form-search');

formSearchBtn.addEventListener('mouseover', (event) => {
  event.preventDefault();
  formSearch.classList.add('open');
})

formSearch.addEventListener('keydown', function(event) {
  if (event.keyCode === 13) formSearch.classList.remove('open');
});

// TRIPS
const tripPickContents = document.querySelectorAll('.trips-pick__item-content');
const tripPickMenu = document.querySelectorAll('.trips-pick__menu-item');
const streams = document.querySelectorAll('.trips-pick__item-gallery-stream');
const prevBtns = document.querySelectorAll('.trips-pick__item-gallery-prev');
const nextBtns = document.querySelectorAll('.trips-pick__item-gallery-next');
let galleryImgs = document.querySelectorAll('.trips-pick__item-gallery-img');

let activeStream = 
  document.getElementsByClassName('trips-pick__item-gallery-stream active');
let activePrevBtn = 
  document.getElementsByClassName('trips-pick__item-gallery-prev active');
let activeNextBtn = 
  document.getElementsByClassName('trips-pick__item-gallery-next active');
let activeGalleryImgs =
  document.getElementsByClassName('trips-pick__item-gallery-img active');

nextBtns.forEach(nextBtn => {
  nextBtn.addEventListener('click', (e) => {
    e.preventDefault();
    activeStream[0].appendChild(activeGalleryImgs[0]);
    activeGalleryImgs = 
      document.getElementsByClassName('trips-pick__item-gallery-img active');
  })
})  

prevBtns.forEach(prevBtn => {
  prevBtn.addEventListener('click', (e) => {
    e.preventDefault();
    activeStream[0].insertBefore(activeGalleryImgs[activeGalleryImgs.length - 1], activeGalleryImgs[0]);
    activeGalleryImgs = 
      document.getElementsByClassName('trips-pick__item-gallery-img active');
  })
})  

// Переключение меню TRIPS
tripPickMenu.forEach((link) => {
  link.addEventListener('click', (e) => {

    // Смена активного класса для меню TRIPS
    tripPickMenu.forEach((link) => {
      link.classList.remove('active');
    })

    e.target.classList.add('active');

    // Смена блока с контентом и его составляющих
    tripPickContents.forEach((content) => {
      if(content.classList.contains(e.target.id)){

        // Удаление текущего класса active у content и составляющих
        tripPickContents.forEach((element) => {
          element.classList.remove('active')
        })

        streams.forEach(stream => {
          stream.classList.remove('active')
        }) 

        galleryImgs.forEach(img => {
          img.classList.remove('active');
        })

        nextBtns.forEach(nextBnt => {
          nextBnt.classList.remove('active');
        })

        prevBtns.forEach(prevBnt => {
          prevBnt.classList.remove('active');
        })

        // Получение текущих элементов нового блока content
        const currentStream = content
          .querySelector('.trips-pick__item-gallery')
          .querySelector('.trips-pick__item-gallery-stream');

        const currentGalletyImgs = content
          .querySelector('.trips-pick__item-gallery')
          .querySelector('.trips-pick__item-gallery-stream')
          .querySelectorAll('.trips-pick__item-gallery-img');

        const currentNextBtn = content
          .querySelector('.trips-pick__item-gallery')
          .querySelector('.trips-pick__item-gallery-next');

        const currentPrevBtn = content
          .querySelector('.trips-pick__item-gallery')
          .querySelector('.trips-pick__item-gallery-prev');

        // Добавление к текущим составляющим блока content класса active
        content.classList.add('active');

        currentStream.classList.add('active')  
        currentGalletyImgs.forEach(img => {
          img.classList.add('active');
        })

        currentNextBtn.classList.add('active');
        currentPrevBtn.classList.add('active');
      }
    })
  })
})
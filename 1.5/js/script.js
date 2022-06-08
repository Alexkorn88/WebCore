
const slider = document.querySelector('.swiper');

let mobSwiper;

function mobileSlider() {
    if (window.innerWidth <= 760) {
        mobSwiper = new Swiper('.swiper', {

            slidesPerView: 'auto',
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },

            spaceBetween: 16,
            // slidesPerView: 1
        });

        slider.dataset.mobile = 'true';
    }

    if (window.innerWidth > 760) {
        slider.dataset.mobile = 'false';
        
        if (slider.classList.contains('swiper-initialized')) {
            mobSwiper.destroy();
        }
        
    }
}

mobileSlider();

window.addEventListener('resize', () => {
    mobileSlider();
});

let buttonOpen = document.querySelector('.expand__btn-open')
let buttonClose = document.querySelector('.expand__btn-close')
let mainOpen = document.querySelector('.main__open')

buttonOpen.classList.remove('open')

buttonOpen.addEventListener('click', function () {
    buttonOpen.classList.remove('open')
    if(document.querySelector('.main__open')) {
        mainOpen.classList.remove('main__open')
        buttonOpen.classList.add('open')
        buttonClose.classList.remove('close')
    } 
    
  });

  buttonClose.addEventListener('click', function () {
    buttonClose.classList.remove('close')
    if(!document.querySelector('.main__open')) {
        mainOpen.classList.add('main__open')
        buttonClose.classList.add('close')
        buttonOpen.classList.remove('open')
    } 
    
  });

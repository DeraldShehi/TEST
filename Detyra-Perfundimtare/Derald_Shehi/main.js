function modulo(number, mod) {
    let result = number % mod;
    if (result < 0) {
        result += mod;
    }
    return result;
}

function setUpCarousel(carousel) {
    function handleNext() {
        currentSlide = modulo(currentSlide + 1, numSlides);
        changeSlide(currentSlide);
    }

    function handlePrevious() {
        currentSlide = modulo(currentSlide - 1, numSlides);
        changeSlide(currentSlide);
    }

    function changeSlide(slideNumber) {
        carousel.style.setProperty('--current-slide', slideNumber);
    }

    // get elements
    const buttonPrevious = carousel.querySelector('[data-carousel-button-previous]');
    const buttonNext = carousel.querySelector('[data-carousel-button-next]');
    const slidesContainer = carousel.querySelector('[data-carousel-slides-container]');

    // carousel state we need to remember
    let currentSlide = 0;
    const numSlides = slidesContainer.children.length;

    // set up events
    buttonPrevious.addEventListener('click', handlePrevious);
    buttonNext.addEventListener('click', handleNext);
}

const carousels = document.querySelectorAll('[data-carousel]');
carousels.forEach(setUpCarousel);

class Carousel {
    constructor(carousel) {
        // find elements
        this.carousel = carousel;
        this.buttonPrevious = carousel.querySelector('[data-carousel-button-previous]');
        this.buttonNext = carousel.querySelector('[data-carousel-button-next]');
        this.slidesContainer = carousel.querySelector('[data-carousel-slides-container]');

        // state
        this.currentSlide = 0;
        this.numSlides = this.slidesContainer.children.length;

        // add events
        this.buttonPrevious.addEventListener('click', this.handlePrevious.bind(this));
        this.buttonNext.addEventListener('click', this.handleNext.bind(this));
    }

    handleNext() {
        this.currentSlide = modulo(this.currentSlide + 1, this.numSlides);
        this.carousel.style.setProperty('--current-slide', this.currentSlide);
    }

    handlePrevious() {
        this.currentSlide = modulo(this.currentSlide - 1, this.numSlides);
        this.carousel.style.setProperty('--current-slide', this.currentSlide);
    }
}

const carousels1 = document.querySelectorAll('[data-carousel]');
carousels1.forEach(carousel => new Carousel(carousel));


let Btn_Read_More = document.getElementById("btn-ReadMore");
Btn_Read_More.addEventListener('click', () => {
    console.log("Une klikova 'Read More'");
});

let Btn_Book_Now = document.getElementById("btn-BookNow");
Btn_Book_Now.addEventListener('click', () => {
    console.log("Une klikova 'Book Now'");
});

const Service = async () => {
    const Service_Request = await fetch("https://api.npoint.io/fe3fd34cbd8e1b186fd7");
    // const Service_Request = await fetch("https://api.npoint.io/96cde51098094fdb17c2");
    const Service_Respons = await Service_Request.json();
    // const Service_Respons2 = Service_Respons.foods;

    console.log(Service_Respons);
    // console.log(Service_Respons2);


    for (let index = 0; index < Service_Respons.length; index++) {
        const Card = `<div class="card text-end">
            <img class="card-img-top" src=${Service_Respons[index].image} alt="Title" />
            <div class="card-body">
                <h3 class="card-title">${Service_Respons[index].title}</h3>
                <p class="card-text">${Service_Respons[index].description}</p>
            </div>
        </div>`;
        document.getElementById("row-div").innerHTML += Card;
    };

};

Service();


function showSlidebar() {
    const sidebar = document.querySelector('.slideBar')
    sidebar.style.display = 'flex'
}

function hideSlidebar() {
    const sidebar = document.querySelector('.slideBar')
    sidebar.style.display = 'none'

}
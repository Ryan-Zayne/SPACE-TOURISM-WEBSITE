import * as navigationJs from './navigation.js';

const sliderPanel = document.querySelectorAll('[type="radio"]');


sliderPanel.forEach( (Slide) => Slide.addEventListener("click", changeSlidePanel)
);

function changeSlidePanel(e) {
    const targetSlide = e.target;     /* This refers back to the particular element that triggers the event, 
                                       which is "click" in this case */
    const targetArticle = targetSlide.getAttribute("aria-controls");
    const targetImage = targetSlide.getAttribute("data-image")
    const slideContainer = targetSlide.parentNode;
    console.log(targetArticle)
    const secondaryContainer = slideContainer.parentNode;
    const primaryContainer = secondaryContainer.previousElementSibling;

    secondaryContainer
        .querySelectorAll('.crew-article')
        .forEach((article) => article.setAttribute('hidden', true));

    secondaryContainer.querySelector(`#${targetArticle}`).removeAttribute('hidden');

    primaryContainer
        .querySelectorAll('.image-holder')
        .forEach((image) => image.setAttribute('hidden', true));

    primaryContainer.querySelector(`#${targetImage}`).removeAttribute('hidden');

}   

import * as navigationJs from './navigation.js';


const tabPanel = document.querySelectorAll('.tab-span');

tabPanel.forEach( (tab) => tab.addEventListener("click", changeTabPanel));


function changeTabPanel(e) {
    const targetTab = e.target;     /* This refers back to the particular element that      
                                    triggers the event, which is "click" in this case */

    const targetArticle = targetTab.getAttribute("aria-controls");
    const targetImage = targetTab.getAttribute("data-image")
    const tabContainer = targetTab.parentNode;
    const secondaryContainer = tabContainer.parentNode;
    const primaryContainer = secondaryContainer.previousElementSibling;

    secondaryContainer
        .querySelectorAll('.tab-article')
        .forEach((article) => article.setAttribute('hidden', true));
    
    secondaryContainer.querySelector(`#${targetArticle}`).removeAttribute('hidden');


    primaryContainer
        .querySelectorAll('.image-holder')
        .forEach((image) => image.setAttribute('hidden', true));
    
    primaryContainer.querySelector(`#${targetImage}`).removeAttribute('hidden');

}   

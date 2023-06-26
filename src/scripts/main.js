document,addEventListener('DOMContentLoaded', function(){
    const buttons = document.querySelectorAll('[data-tab-button]');
    const questions = document.querySelectorAll('[data-faq-question]');
    
    const heroSection = document.querySelector('.hero');
    const heighthero = heroSection.clientHeight;

    window.addEventListener('scroll', function() {
        const currentposition = window.scrollY;

        if(currentposition < heighthero) {
            hidenHeaderElements();
        } else {
            displayHeaderElement();
        }
    })

    // Seção de atrações, programacao das abas
    for(let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function(button){
            const tabTarget = button.target.dataset.tabButton;
            const tab = document.querySelector(`[data-tab-id=${tabTarget}]`);
            hideAllTabs();
            tab.classList.add('shows__list--is--active');
            removeActiveButton()
            button.target.classList.add('shows__tabs__button--is--active');
        })
    }

    //Seção FAQ, acordion
    for(let i = 0; i < questions.length; i++) {
        questions[i].addEventListener('click', openOrCloseAnswer)
    }
})

function hidenHeaderElements () {
    const header = document.querySelector('header');
    header.classList.add('header--is-hidden');
}

function displayHeaderElement () {
    const header = document.querySelector('header');
    header.classList.remove('header--is-hidden');
}

function openOrCloseAnswer(element) {
    const classe = 'faq__questions__item--is-open';
    const elementfather = element.target.parentNode;

    elementfather.classList.toggle(classe)
}

function removeActiveButton() {
    const buttons = document.querySelectorAll('[data-tab-button]');

    for(let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('shows__tabs__button--is--active')
    }
}

function hideAllTabs() {
    const tabsContainer = document.querySelectorAll('[data-tab-id]');

    for (let i = 0; i  < tabsContainer.length; i++) {
        tabsContainer[i].classList.remove('shows__list--is--active');
    }
}
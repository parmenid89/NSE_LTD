import $ from './lib/lib';
import images from './lib/modules/_images';
import scrolling from './lib/modules/_scrolling';

window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    const hamburger = document.querySelector('.hamburger'),
          menu = document.querySelector('.menu'),
          closeElem = document.querySelector('.menu_close'),
          modalWindow = document.querySelector('.menu__overlay'), 
          logo = document.querySelector('.promo__logo_text');

    logo.addEventListener('click', () => {
        location.reload();
    })

    hamburger.addEventListener('click', () => {
        menu.classList.add('active');
        hamburger.classList.add('hamburger_active');
    });

    closeElem.addEventListener('click', () => {
        menu.classList.remove('active');
        hamburger.classList.remove('hamburger_active');
    });

    modalWindow.addEventListener('click', (e) => {
        if (e.target === modalWindow && closeElem) {
            menu.classList.remove('active')
            hamburger.classList.remove('hamburger_active');
        }
    });

    images();
    scrolling('.pageup');
    
});


import $ from '../core';

$.prototype.modal = function(created) {
    let marginOffset = window.innerWidth - document.body.offsetWidth + `px`;
    const pageUp = document.querySelector('.pageup');

    for (let i=0; i < this.length; i++) {
        const target = this[i].getAttribute('data-target');
        $(this[i]).click((e) => {
            e.preventDefault();
            $(target).fadeIn(200);
            document.body.style.overflow = 'hidden';
            document.body.style.paddingRight = marginOffset;
            pageUp.classList.remove('fadeIn');
        });

        const closeElements = document.querySelectorAll(`${target} [data-close]`);
        closeElements.forEach(elem => {
            $(elem).click(() => {
                $(target).fadeOut(200);
                document.body.style.overflow = '';
                document.body.style.paddingRight = `0px`;
                pageUp.classList.add('fadeIn');
                if (created) {
                    document.querySelector(target).remove();
                }
            });
        });

        $(target).click(e => {
            if (e.target.classList.contains('modal')) {
                $(target).fadeOut(200);
                document.body.style.overflow = '';
                document.body.style.paddingRight = `0px`;
                pageUp.classList.add('fadeIn');
                if (created) {
                    document.querySelector(target).remove();
                }
            }
        });
    }

};

$('[data-toggle="modal"]').modal();

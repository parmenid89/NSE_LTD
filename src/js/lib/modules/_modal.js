import $ from '../core';

$.prototype.modal = function(created) {
    let scroll = calcScroll();

    for (let i=0; i < this.length; i++) {
        const target = this[i].getAttribute('data-target');
        $(this[i]).click((e) => {
            e.preventDefault();
            $(target).fadeIn(200);
            document.body.style.overflow = 'hidden';
            document.body.style.paddingRight = `${scroll}px`;
        });

        const closeElements = document.querySelectorAll(`${target} [data-close]`);
        closeElements.forEach(elem => {
            $(elem).click(() => {
                $(target).fadeOut(200);
                document.body.style.overflow = '';
                document.body.style.paddingRight = `0px`;
                if (created) {
                    document.querySelector(target).remove();
                }
            });
        });

        $(target).click(e => {
            if (e.target.classList.contains('modal')) {
                $(target).fadeOut(200);
                document.body.style.overflow = '';
                document.body.style.marginRight = `0px`;
                if (created) {
                    document.querySelector(target).remove();
                }
            }
        });
    }

    function calcScroll() {         /* Функция для расчета ширины скролла */
        let div = document.createElement('div');

        div.style.width = '50px';
        div.style.height = '50px';
        div.style.overflowY = 'scroll';
        div.style.visibility = 'hidden';

        document.body.appendChild(div);
        let scrollWidth = div.offsetWidth - div.clientWidth;
        div.remove();

        return scrollWidth; 
    }
};

$('[data-toggle="modal"]').modal();

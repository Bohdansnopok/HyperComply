"use strict"
const animItems = document.querySelectorAll('.anim-items');

if (animItems.length > 0) {
    window.addEventListener('scroll', animOnScroll);

    function animOnScroll(params) {
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;
            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }

            if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
                animItem.classList.add('active');
            } else {
                animItem.classList.remove('active');
            }
        }
    }

    function offset(el) {
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return {top: rect.top + scrollTop, left: rect.left + scrollLeft}
    }

    setTimeout(() => {
        animOnScroll();
    }, 20);
}

document.getElementById('burger').addEventListener('click', function () {
    document.querySelector('header').classList.toggle('open')
    document.querySelector('.header-burger').classList.toggle('burger-position')
})

// document.querySelectorAll('closeDealsRight__subtitle').addEventListener("click", function () {
//     document.querySelector('.closeDealsRight__subtitle').classList.toggle('click_none')
// })

window.addEventListener("load", windowLoad);

function windowLoad() {
    function digitsCountersInit(digitsCountersItems) {
        // let digitsCounters = digitsCountersItems ? digitsCountersItems : document.querySelectorAll("[data-digits-counter]");
        let digitsCountersContainer = digitsCountersItems ? digitsCountersItems : document.querySelectorAll('.closeDeals__single-chart')

        let a = [1, 2, '5 abc'];
        let obj = {
            'first': 1, 2: 'second', 'obj': {}, 'f': function () {
            }, 'array': Array()
        };
        // a.forEach(function (hhh) {
        //     console.log(hhh)
        // })
        // obj['first']
        // obj['2']
        // obj['obj']
        // obj['f'];
        // console.log(Object.entries(obj))
        // console.log(Object.keys(obj))
        // console.log(Object.values(obj))
        for (let a in obj) {
            // console.log(a, obj[a])
        }
        // console.log(a.length)
        // console.log(digitsCounters);
        if (digitsCountersContainer) {
            digitsCountersContainer.forEach(count => {
                digitsCountersAnimate(count);
                // console.log(count.innerHTML)
            });
        }
    }

    function digitsCountersAnimate(digitsCounterContainer) {
        let digitsCounter = digitsCounterContainer.querySelector('[data-digits-counter]')
        // let value = digitsCounterContainer.querySelector('[stroke-dasharray]');
        let circle = document.querySelector('.closeDeals__circle');
        let closeDealsInput = document.querySelector('.closeDeals__percentage__input')
        let closeDealsForm = document.querySelector('.closeDeals__percentage__form')
        // let digitsCounterAll = digitsCounterContainer.querySelectorAll('*')
        // digitsCounterAll.forEach(function (digitsCounterAllItem) {
        //     digitsCounterAllItem.addEventListener('click', function () {
        //         console.log('click2');
        //     })
        // })


        // document.addEventListener("keydown", function (event) {
        //     if (event.code === 'KeyEnter') {
        //
        //     }
        // })

        digitsCounter.addEventListener('click', function () {
            digitsCounter.classList.add('click_none');
            closeDealsForm.classList.add('click');
            document.getElementById('closeDeals__percentage__input').focus()
            closeDealsInput.value = '';

        })

        closeDealsForm.addEventListener('submit', function (event) {
            digitsCounter.innerHTML = closeDealsInput.value + '%'
            circle.setAttribute("stroke-dasharray", closeDealsInput.value + ',100')
            event.preventDefault()
            digitsCounter.classList.remove('click_none');
            closeDealsForm.classList.remove('click');
            document.getElementById('closeDeals__percentage__input').focus()

            if (closeDealsInput.value === '') {
                digitsCounter.innerHTML = 91 + '%';
            }
        })


        // if (closeDealsForm === onsubmit) {
        //
        // }

        closeDealsInput.addEventListener('blur', function () {
            digitsCounter.classList.remove('click_none');
            closeDealsForm.classList.remove('click');
            document.getElementById('closeDeals__percentage__input').focus()

        })

        document.addEventListener('keydown', function (e) {
            if (e.keyCode === 27) {
                digitsCounter.classList.remove('click_none');
                closeDealsForm.classList.remove('click');
                document.getElementById('closeDeals__percentage__input').focus()
            }
        });

        document.addEventListener('keydown', function (e) {
            if (e.keyCode === 13) {
                if (closeDealsInput.value > 100) {
                    closeDealsInput.value = 100;
                }
            }
        });

        console.log(digitsCounter)
        let startTimestamp = null;
        const duration = parseInt(digitsCounter.dataset.digitsCounter) ? parseInt(digitsCounter.dataset.digitsCounter) : 1000;
        const startValue = parseInt(digitsCounter.innerHTML);
        const startPosition = 0;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            digitsCounter.innerHTML = Math.floor(progress * (startPosition + startValue)) + '%';
            // console.log(Math.floor(progress * (startPosition + startValue)))
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        }
        window.requestAnimationFrame(step);
    }

    digitsCountersInit();
}


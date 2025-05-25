const bars = document.querySelector('#bars');
const navLinks = document.querySelector('.nav-links');
let screenWidth = window.innerWidth;


//! event to toggle navbar 
// let navIsHidden = false;
// bars.on('click', () => {
//     navLinks.slideToggle(1000);
//     navIsHidden = true;
// })
// $(window).on('resize', () => {
//     if (screenWidth > 767) {
//         navLinks.css({ dispaly: 'flex', flexDirection: 'row' })
//     }
// })


let forms = $('form')

forms.on('submit', function (e) {
    e.preventDefault()
})

// event to open and close navlinks
bars.addEventListener('click', () => {
    navLinks.classList.toggle('nav-links-shown');
})



// ! event to hide and show mega menue ;;;
const otherLinks = document.getElementById('otherLinks');
const megaMenue = document.querySelector('.mega-menue');
const closeMegaMenue = document.querySelector('.mega-menue .close');
const megaMenueLinks = Array.from(document.querySelectorAll('.mega-links a'));
let isShown = false
otherLinks.addEventListener('click', (event) => {
    event.preventDefault()
    megaMenueToggle()
})
function megaMenueToggle() {
    // * function to show meaga menue 
    function showMegaMenue() {
        // *event for all links in mega menu to close meagmenu when click on it
        megaMenueLinks.forEach(element => {
            element.addEventListener('click', () => {
                hideMegaMenue();
            })
        });
        megaMenue.style.opacity = '1';
        megaMenue.style.zIndex = '100';
        megaMenue.style.top = 'calc(100% + 2px)';
        isShown = true;
    }
    // * function to hide meaga menue 
    function hideMegaMenue() {
        megaMenue.style.opacity = '0';
        megaMenue.style.top = 'calc(100% + 50px)';
        setTimeout(() => {
            megaMenue.style.display = 'none';
        }, 300)
        isShown = false;
    }
    if (isShown == false) {
        megaMenue.style.display = 'flex';
        setTimeout(() => {
            showMegaMenue()
        }, 1)
        // & event to close meagmenue by close icon 
        closeMegaMenue.addEventListener('click', () => {
            hideMegaMenue()
            navLinks.classList.remove('nav-links-shown');
            isShown = false;
        })
    } else {
        hideMegaMenue()
        setTimeout(() => {
            megaMenue.style.display = 'none';
        }, 300)
    }
}





// Set the date we're counting down to
var countDownDate = new Date("Nov 5, 2025 15:37:25").getTime();
const counters = [
    document.getElementById('days'),
    document.getElementById('hours'),
    document.getElementById('minutes'),
    document.getElementById('seconds')
]
// Update the count down every 1 second
var x = setInterval(function () {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    let timer = [days, hours, minutes, seconds];

    for (let i = 0; i < counters.length; i++) {
        counters[i].innerHTML = timer[i]
    }
    // If the count down is finished, write some text
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
    }
}, 1000);










// // Observer for all counters
// const observer = new IntersectionObserver((entries) => {
//   entries.forEach(startCounter);
// }, {
//   threshold: 0.6
// });

// // Apply observer to each counter
// document.querySelectorAll(".counter").forEach(counter => {
//   observer.observe(counter);
// });

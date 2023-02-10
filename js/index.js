function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)

    );
}

function animateSkillBars(el, level) {
    let bar = document.getElementById(el);
    if (isInViewport(bar)) {

        bar.style.width = `${level}%`
    } else {
        bar.style.width = `0%`
    }
    document.addEventListener("scroll", function () {
        if (isInViewport(bar)) {
            bar.style.width = `${level}%`
        }
        if (!isInViewport(bar)) {
            bar.style.width = "0%"
        }
    });
}

const initApp = () => {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");
    const navLink = document.querySelectorAll(".nav-link");

    hamburger.addEventListener("click", mobileMenu);
    navLink.forEach(n => n.addEventListener("click", closeMenu));

    function mobileMenu() {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    }

    function closeMenu() {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    }

    animateSkillBars('reactJS', 62)
    animateSkillBars('reactNative', 70)
    animateSkillBars('tailwindCSS', 65)
    animateSkillBars('htmlCss', 79)

    animateSkillBars('expressJS', 80)
    animateSkillBars('mysqlsqlite', 75)
    animateSkillBars('typeScript', 65)
    animateSkillBars('apiDev', 75)

    document.getElementById('rapidVocab').onclick = () => {
        location.href = '../projects/rapid-vocab/rapid-vocab.html'
    }
    document.getElementById('complaint').onclick = () => {
        location.href = '../projects/complaint-system/complaint-system.html'
    }
    // const homeId = document.getElementById('home-id')
    // const aboutId = document.getElementById('about-id')
    // const hireMeId = document.getElementById('hireMe-id')
    // const projectsId = document.getElementById('projects-id')

    // document.getElementById('under-home').style.width = `${homeId.getBoundingClientRect().width}px`;
    // document.getElementById('under-about').style.width = `${aboutId.getBoundingClientRect().width}px`;
    // document.getElementById('under-hireMe').style.width = `${hireMeId.getBoundingClientRect().width}px`;
    // document.getElementById('under-projects').style.width = `${projectsId.getBoundingClientRect().width}px`;

    // document.addEventListener("scroll", function () {
    //     if (isInViewport('.about')) {
    //         document.getElementById('under-about').style.display = 'block';
    //     }
    // });
    
    // console.log(homeId.getBoundingClientRect().width)
    // console.log(aboutId.getBoundingClientRect().width)
    // console.log(hireMeId.getBoundingClientRect().width)
    // console.log(projectsId.getBoundingClientRect().width)
}

document.addEventListener('DOMContentLoaded', initApp)
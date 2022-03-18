
const leftTarget = document.getElementById("left-target");

leftTarget.addEventListener("click", function(e){
    const html = document.getElementsByTagName("html")[0];
    const screenWidth = html.clientWidth;
    if (screenWidth > 600){
        e.preventDefault();
    }
    const newPage = leftTarget.href;
    const container = document.getElementsByClassName("landing__client-l")[0];
    container.classList.add("grow");
    console.log(newPage)
    console.log(container)
    setTimeout(() => {
        window.location.href= newPage;
    }, 2000);
});

const rightTarget = document.getElementById("right-target");

rightTarget.addEventListener("click", function(e){
    const html = document.getElementsByTagName("html")[0];
    const screenWidth = html.clientWidth;
    if (screenWidth > 600){
        e.preventDefault();
    }
    const newPage = rightTarget.href;
    const container = document.getElementsByClassName("landing__student-r")[0];
    container.classList.add("r-grow");
    console.log(newPage)
    console.log(container)
    setTimeout(() => {
        window.location.href= newPage;
    }, 2000);
});

// const buttonContainer = document.getElementById('button-container');
//         const openButton = document.getElementById('open-button');
//         const closeButton = document.getElementById('close-button');
//         const mobileMenu = document.getElementById('mobile-menu');
//         buttonContainer.addEventListener("click", () => {

//             if (Array.from(mobileMenu.classList).includes('mobile-nav__list--open')) {
//                 // When we're closing the menu
//                 mobileMenu.classList.remove('mobile-nav__list--open');
//                 mobileMenu.classList.add('mobile-nav__list--close');
                
//                 openButton.style.display = 'block';
//                 closeButton.style.display = 'none';
//             } else {
//                 // When we're opening the menu
//                 mobileMenu.classList.remove('mobile-nav__list--close');
//                 mobileMenu.classList.add('mobile-nav__list--open');
                
//                 openButton.style.display = 'none';
//                 closeButton.style.display = 'block';
//             }
//         });
/** ============ Typing Animation =========== */
let typed = new Typed(".typing", {
    strings: ["", "Web Designer", "Web Developper", "Graphic Designer", "Youtuber"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
});


/** ============ Activate Menus =========== */
const menuItems = document.querySelectorAll('.menu-item');
const sections = document.querySelectorAll('.section');

menuItems.forEach((menuItem) => {
    menuItem.addEventListener("click", () => {
        menuItems.forEach((item) => {
            item.classList.remove('active');
        });
        menuItem.classList.add('active');
    })
});

function activateMenuOnScroll() {
    let len = sections.length;
    while(--len && window.scrollY + 100 < sections[len].offsetTop) {}
    menuItems.forEach((item) => {
        item.classList.remove('active');
    });
    menuItems[len].classList.add('active');
}

activateMenuOnScroll();

window.addEventListener("scroll", activateMenuOnScroll);
(function () {

    //Mobile button menu animation
    var el = document.getElementById("buttonMobile");
    var menu = document.getElementById("mobileMenu");

    document.getElementById("buttonMobile").onclick = function () {
        el.classList.toggle("c-button-mobile--active");
        menu.classList.toggle("mobile-navigation__menu--active");
    }

    //Close mobile menu
    var items = document.querySelectorAll(".mobile-navigation__list li");

    items.forEach(function (elem) {
        elem.addEventListener('click', function () {
            el.classList.remove("c-button-mobile--active");
            menu.classList.remove("mobile-navigation__menu--active");
        })
    })

    //Smooth Scroll
    smoothie();

})();
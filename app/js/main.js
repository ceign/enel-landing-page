document.addEventListener("DOMContentLoaded", function () {

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
        });
    })

    //Navbar desktop transition
    var posPrincipal = window.pageYOffset;

    window.onscroll = function () {
        var posActual = window.pageYOffset;

        if (posPrincipal >= posActual) {
            document.getElementById("navDesktop").classList.add("header-desktop");
            document.getElementById("navDesktop").classList.remove("header-desktop--scrolling");

        } else {
            document.getElementById("navDesktop").classList.add("header-desktop--scrolling");
        }

        //Navbar desktop item list transition
        var posVertical = window.scrollY;
        var itemLista = document.querySelectorAll(".header-desktop ul li");
        var item = Array.from(itemLista);

        if (posVertical < 1340) {
            item[0].classList.add("header-desktop--select");
            item[1].classList.remove("header-desktop--select");
            item[2].classList.remove("header-desktop--select");
            item[3].classList.remove("header-desktop--select");

        } else if (posVertical > 1340 && posVertical < 2100) {

            item[0].classList.remove("header-desktop--select");
            item[1].classList.add("header-desktop--select");
            item[2].classList.remove("header-desktop--select");
            item[3].classList.remove("header-desktop--select");

        } else if (posVertical > 2100 && posVertical < 3600) {

            item[0].classList.remove("header-desktop--select");
            item[1].classList.remove("header-desktop--select");
            item[2].classList.add("header-desktop--select");
            item[3].classList.remove("header-desktop--select");

        } else if (posVertical > 3600 && posVertical < 6000) {

            item[0].classList.remove("header-desktop--select");
            item[1].classList.remove("header-desktop--select");
            item[2].classList.remove("header-desktop--select");
            item[3].classList.add("header-desktop--select");
        }
    }

    //Smooth Scroll
    smoothie();

});
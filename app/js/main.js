(function () {

    //Mobile button menu animation
    document.getElementById("buttonMobile").onclick = function () {
        mobileButtonTransition()
    }

    function mobileButtonTransition() {
        var el = document.getElementById("buttonMobile");
        el.classList.toggle("c-button-mobile--active");

        var menu = document.getElementById("mobileMenu");
        menu.classList.toggle("mobile-navigation__menu--active");
    }

    //Smooth Scroll
    smoothie();

})();
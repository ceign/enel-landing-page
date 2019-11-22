(function () {

    //Mobile button menu animation
    document.getElementById("buttonMobile").onclick = function () {
        mobileButtonTransition()
    }

    function mobileButtonTransition() {
        var el = document.getElementById("buttonMobile");
        el.classList.toggle("c-button-mobile--active");
    }

})();
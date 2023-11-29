document.addEventListener('DOMContentLoaded', function () {
    const navToggle = document.getElementById('nav-toggle');
    const nav = document.querySelector('nav');

    const closeNav = () => {
        nav.classList.remove('-translate-x-0');
        nav.classList.add('-translate-x-full');
    };

    // Toggle nav menu when the button is clicked
    navToggle.addEventListener('click', function (e) {
        e.stopPropagation();
        nav.classList.toggle('-translate-x-0');
        nav.classList.toggle('-translate-x-full');
    });

    // Close nav menu when clicking outside of it
    document.addEventListener('click', function (e) {
        const isClickInsideNav = nav.contains(e.target);
        const isNavToggle = e.target === navToggle;

        if (!isClickInsideNav && !isNavToggle) {
            closeNav();
        }
    });
});

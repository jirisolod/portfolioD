window.onload = function () {
    const menu_btn = document.querySelector('.hamburger');
    const sidebar_menu = document.querySelector('.sidebar-nav');

    menu_btn.addEventListener('click', function() {
        menu_btn.classList.toggle('is-active');
        sidebar_menu.classList.toggle('is-active');
    })
}
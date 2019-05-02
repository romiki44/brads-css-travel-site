import $ from 'jquery';

class MobileMenu {
    constructor() {
        // old way, spagetti-code!
        /*$(".site-header__menu-icon").click(function() {
            console.log("Menu icon was clicked...");
        });*/

        this.siteHeader=$(".site-header");
        this.menuIcon=$(".site-header__menu-icon");
        this.menuContent=$(".site-header__menu-content");
        this.events();
    }

    events() {
        this.menuIcon.click(this.toggleTheMenu.bind(this));
    }

    toggleTheMenu() {
        //console.log("Menu icon clicked - menu toggled");
        this.menuContent.toggleClass("site-header__menu-content--is-visible");
        this.siteHeader.toggleClass("site-header--is-expanded");
        this.menuIcon.toggleClass("site-header__menu-icon--close-x");
    }
}

export default MobileMenu;
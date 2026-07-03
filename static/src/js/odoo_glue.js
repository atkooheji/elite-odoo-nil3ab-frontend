/** @odoo-module **/
import { publicWidget } from "@web/legacy/js/public/public_widget";

/**
 * 1. THE ULTIMATE SCROLL REVEAL ENGINE
 * Automatically listens for any element with ".reveal" globally 
 * and applies activation on scroll entry.
 */
const initScrollReveals = () => {
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-active');
                // Optional: Stop observing to only run animation once
                // revealObserver.unobserve(entry.target); 
            }
        });
    }, {
        root: null,
        threshold: 0.15, // Starts when 15% is visible
        rootMargin: "0px 0px -50px 0px"
    });

    // Bind to all present elements
    document.querySelectorAll('.reveal').forEach(el => {
        revealObserver.observe(el);
    });
};

// Fire on DOM ready and expose globally
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initScrollReveals);
} else {
    initScrollReveals();
}

/**
 * 2. REACT DYNAMIC SNIPPET HANDLER
 */
publicWidget.registry.Nil3abReactWidget = publicWidget.Widget.extend({
    selector: '.s_nil3ab_react_host',

    start: function () {
        this._super.apply(this, arguments);
        
        const componentName = this.el.getAttribute('data-component') || 'App';
        
        console.log(`[Nil3ab ENGINE] Activating ${componentName}`);
        
        if (window.Nil3ab && typeof window.Nil3ab.mountComponent === 'function') {
            window.Nil3ab.mountComponent(this.el, componentName);
        } else {
            document.addEventListener('Nil3abReady', () => {
                window.Nil3ab.mountComponent(this.el, componentName);
            });
        }
    },

    destroy: function () {
        if (window.Nil3ab && typeof window.Nil3ab.unmountComponent === 'function') {
             window.Nil3ab.unmountComponent(this.el);
        }
        this._super.apply(this, arguments);
    },
});

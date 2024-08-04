document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = anchor.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    class BuddhistHolidays extends HTMLElement {
        constructor() {
            super();
            this.attachShadow({ mode: 'open' });
            const template = document.createElement('template');
            template.innerHTML = `
                <style>
                    /* Add styles here */
                </style>
                <div>
                    <!-- Add content here -->
                </div>
            `;
            this.shadowRoot.appendChild(template.content.cloneNode(true));
        }

        connectedCallback() {
        }

        disconnectedCallback() {
        }
    }

    customElements.define('buddhist-holidays', BuddhistHolidays);
    const app = document.getElementById('app');
    if (app) {
        app.appendChild(new BuddhistHolidays());
    }

    const preventDefaultForEvent = (event) => event.preventDefault();
    document.addEventListener('contextmenu', preventDefaultForEvent);
    document.addEventListener('copy', preventDefaultForEvent);
    document.addEventListener('paste', preventDefaultForEvent);
});

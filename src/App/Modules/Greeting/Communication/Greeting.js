// Create a class for the element
export class Greeting extends HTMLElement {
    // Specify observed attributes so that
    // attributeChangedCallback will work
    static get observedAttributes() {return ['w', 'l']; }

    constructor() {
        // Always call super first in constructor
        super();

        this.innerText = 'HI Greeting';
    }

    connectedCallback() {
        console.log('connectedCallback');
    }

    disconnectedCallback() {
        console.log('disconnectedCallback');
    }

    adoptedCallback() {
        console.log('adoptedCallback');
    }

    attributeChangedCallback(name, oldValue, newValue) {
        console.log('attributeChangedCallback');
    }
}

customElements.define('custom-greeting', Greeting);
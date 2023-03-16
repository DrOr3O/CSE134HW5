class ButtonCount extends HTMLElement {
    constructor() {
        super();
        this.count = 0;
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `<button>Clicked: ${this.count} </button>`;
        this.addEventListener("click", this.onClick);
    }

    onClick() {
        this.count++;
        this.shadowRoot.innerHTML = `<button>Clicked: ${this.count} </button>`;
    }
}

window.customElements.define('button-count', ButtonCount);
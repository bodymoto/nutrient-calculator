import {LitElement, html} from 'lit';

export class BodyElement extends LitElement {
	static properties = {
		x: { type: String }
	}

	constructor() {
		super();
		this.x = 'HELLO WORLD';
	}

	render() {
		return html`<h1>${this.x}<h1>`;
	}
}

customElements.define('body-element', BodyElement);
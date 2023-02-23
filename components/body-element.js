import {LitElement, html, css} from 'lit';

export class BodyElement extends LitElement {
	static properties = {
		x: { type: String }
	}

	constructor() {
		super();
		this.x = 'HELLO WORLD';
	}

	static styles = css`
	  :host {
	  	display: flex;
	  	align-content: center;
	  	justify-content: center;
	  	flex-direction: column;
	  }
	`;

	render() {
		return html`
		<h1>${this.x}</h1>

		<p>When I was this and that then I did this and that.</p>
		`;
	}
}

customElements.define('body-element', BodyElement);
import {LitElement, html, css} from 'lit';

export class FooterElement extends LitElement {
	static styles = css`
		* {
			margin: 0;
			padding: 0;
			border-sizing: border-box;
		}

		:host {
			margin: 5px;
			height: 400px;
			border: 1px solid black;
		}
	`;

	constructor() {
		super();
	}

	render() {
		return html`
		<footer>
			<p>FOOTER ELEMENT</p>
		</footer>
		`;
	}
}

customElements.define('footer-element', FooterElement);
import {LitElement, html, css} from 'lit';

export class SocialElement extends LitElement {
	static styles = css`
		* {
			margin: 0;
			padding: 0;
			border-sizing: border-box;
		}

		:host {
			height: 400px;
		}
	`;

	constructor() {
		super();
	}

	render() {
		return html`
			<p>SOCIAL ELEMENT</p>
		`;
	}
}

customElements.define('social-element', SocialElement);
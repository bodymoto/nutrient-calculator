import {LitElement, html, css} from 'lit';

export class HeaderElement extends LitElement {
	static styles = css``;

	static properties = {}

	constructor() {
		super();
	}

	render() {
		return html`
			<header>HEADER HERE</header>
		`;
	}
}

customElements.define('header-element', HeaderElement);
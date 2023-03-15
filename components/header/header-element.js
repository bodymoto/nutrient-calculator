import {LitElement, html, css} from 'lit';

export class HeaderElement extends LitElement {
	static styles = css`
		* {
			margin: 0;
			padding: 0;
			box-sizing: border-box;
		}

		header {
			font-size: 16px;
			height: 600px;
		}
	`;

	static properties = {}

	constructor() {
		super();
	}

	render() {
		return html`
		<header>

			<h1>bodyboon</h1>
			<h1>All the nutritional data needed to hit daily targets, replace vitamin pills, or to simply know more.</h1>

			<h2>.</h2>
			<p></p>

		</header>
		`;
	}
}

customElements.define('header-element', HeaderElement);
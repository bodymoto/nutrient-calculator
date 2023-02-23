import {LitElement, html, css} from 'lit';

export class CountElement extends LitElement {
	static properties = {}

	constructor() {
		super();
	}

	static styles = css`
		:host {
			margin: 20px;
			border: 1px solid black;
		}
	`;

	render() {
		return html`
			<p>count-element is here!</p>
		`;
	}
}

customElements.define('count-element', CountElement);
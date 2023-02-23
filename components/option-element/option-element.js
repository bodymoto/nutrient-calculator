import {LitElement, html, css} from 'lit';

export class OptionElement extends LitElement {
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
			<p>options-element is here!</p>
		`;
	}
}

customElements.define('option-element', OptionElement);
import {LitElement, html, css} from 'lit';

export class FilterElement extends LitElement {
	static properties = {}

	constructor() {
		super();
	}

	// search by object.group

	static styles = css`
		:host {
			margin: 10px;
			border: 1px solid black;
		}
	`;

	render() {
		return html``;
	}
}

customElements.define('filter-element', FilterElement);
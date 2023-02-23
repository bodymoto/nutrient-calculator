import {LitElement, html, css} from 'lit';

export class FilterElement extends LitElement {
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
			<p>filter-element is here!</p>
		`;
	}
}

customElements.define('filter-element', FilterElement);
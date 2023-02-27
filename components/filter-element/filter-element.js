import {LitElement, html, css} from 'lit';

export class FilterElement extends LitElement {
	static properties = {}

	constructor() {
		super();

		this.addEventListener('input', (event) => {
			this.handleInput(event);
		});
	}

	static styles = css`
		:host {
			margin: 20px;
			padding: 10px;
			border: 1px solid black;
		}
	`;

	async handleInput(event) {
		const options = {
			detail: {	input: event.data },
			bubbles: true,
			composed: true
		};

    await this.updateComplete;
		this.dispatchEvent(new CustomEvent('filter-input', options));
	}

	render() {
		return html`
			<input autocomplete="off" type="search" name="input" />
			<label for="input">Search a food</label>
		`;
	}
}

customElements.define('filter-element', FilterElement);
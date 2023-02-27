import {LitElement, html, css} from 'lit';

export class SearchElement extends LitElement {
	static properties = {}

	constructor() {
		super();

		this.addEventListener('input', (event) => {
			this.handleInput(event);
		});
	}

	static styles = css`
		:host {
			margin: 10px;
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
		this.dispatchEvent(new CustomEvent('search-input', options));
	}

	render() {
		return html`
			<label for="input">Search a food:</label>
			<input autocomplete="off" type="search" name="input" />
		`;
	}
}

customElements.define('search-element', SearchElement);
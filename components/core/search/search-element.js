import {LitElement, html, css} from 'lit';

export class SearchElement extends LitElement {
	static styles = css`
		:host {
			margin: 10px;
			padding: 10px;
			border: 1px solid black;
		}
	`;

	static properties = {
		value: { type: String }
	}

	constructor() {
		super();
		this.value = '';
		this.addEventListener('input', (event) => {
			this.handleInput(event);
		});
	}


	async handleInput(event) {
		this.value = this.shadowRoot.querySelector('input').value;
		
		const options = {
			detail: {	input: this.value },
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
import {LitElement, html, css} from 'lit';

export class FilterElement extends LitElement {
	static properties = {
		arr: { type: Array }
	}

	constructor() {
		super();

		this.arr = [];

		this.addEventListener('input', (event) => {
			this.handleInput(event);
		});
	}

	static styles = css`
		:host {
			margin: 20px;
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

	willUpdate(changedProperties) {
		if (changedProperties.has('arr')) {
			// console.log(this.arr);
		}
	}

	render() {
		return html`
			<input autocomplete="off" type="search" />
			<ul>
				${
					this.arr.map((object) => {
						return html`
						<li>${object.name}</li>
						`
					})
				}
			</ul>
		`;
	}
}

customElements.define('filter-element', FilterElement);
import {LitElement, html, css} from 'lit';

export class FilterElement extends LitElement {
	static properties = {
		filterData: { type: Array },
		input: { type: Array },
		search: { type: String },
		arr: { type: Array }
	}

	constructor() {
		super();

		this.filterData = [];
		this.input = [];
		this.search = '';
		this.arr = [];

		this.addEventListener('input', (event) => {
			if (event.data == null) {
				this.input.pop();
			} else {
				this.input.push(event.data);
			}
			this.search = this.input.join('');

			this.arr = [];
			this.filterData.map((word) => {
				if (word.name.includes(this.search)) {
					if(!this.arr.includes(word)) {
						this.arr.push(word);
					}
				};

			});
		});
	}

	static styles = css`
		:host {
			margin: 20px;
			border: 1px solid black;
		}
	`;

	willUpdate(changedProperties) {
		console.log(changedProperties);
		if (changedProperties.has('filterData')) {
			this.arr = this.filterData;
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
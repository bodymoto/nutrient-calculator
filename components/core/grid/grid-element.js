import {LitElement, html, css} from 'lit';
import {FoodButtonElement} from './food-btn/food-btn-element.js';

export class GridElement extends LitElement {
	static styles = css`
		* {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

		:host {
			display: flex;
			align-content: start;
			justify-content: start;
			flex-wrap: wrap;
			padding: 0 5px 5px 5px;
			margin: 0 30px 15px 0;
			height: 318px;
			overflow: auto;
			background-color: #fff;
			gap: 1px;
		}

		food-btn-element {
			border: 0.5px solid #3e3e42;
		}

		food-btn-element:active {
			filter: brightness(145%);
		}
	`;

	static properties = {
		data: { type: Array },
		// searchData: { type: Array },
		// searchValue: { type: String },
		_grid: { type: Array },
		name: { type: String }
	}

	constructor() {
		super();
		this.data = [];
		// this.searchData = [];
		// this.searchValue = '';
		this._grid = [];
		this.name = '';
	}

	willUpdate(changedProperties) {
		this._grid = this.data;

		if (changedProperties.has('searchValue')) {
			// property set by SearchElement
			// if (!this.searchValue.length) {
			// 	this._grid = this.data;
			// 	return;
			// }

			// this.searchData = [];
			// this.data.map((word) => {
			// 	if (word.name.includes(this.searchValue)) {
			// 		if(!this.searchData.includes(word)) {
			// 			this.searchData.push(word);
			// 		}
			// 	};
			// });
			// this._grid = this.searchData;
		}

		this._grid.map((value) => {
			// boolean set by FilterByElement
			if (value.checked === true) {
				this._grid = this._grid.filter(
					(boolean) => boolean.checked === true);
			}
		});
	}

	async handleClick(event) {
		this.name = event.target.name;
		const options = {
			detail: {	name: this.name },
			bubbles: true,
			composed: true
		};
    await this.updateComplete;
		this.dispatchEvent(new CustomEvent('click-add', options));
	}

	render() {
		return html`
			${this._grid.map(
				(value) => {
					return html`
						<food-btn-element @click=${this.handleClick} name=${value.name} .value=${value}></food-btn-element>
					`
				})
			}
		`;
	}
}

customElements.define('grid-element', GridElement);
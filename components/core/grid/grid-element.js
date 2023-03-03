import {LitElement, html, css} from 'lit';
import {FoodButtonElement} from './food-btn/food-btn-element.js';

export class GridElement extends LitElement {
	static styles = css`
		:host {
			margin: 10px;
			border: 1px solid black;
		}
	`;

	static properties = {
		data: { type: Array },
		searchData: { type: Array },
		searchValue: { type: String },
		_grid: { type: Array }
	}

	constructor() {
		super();
		this.data = [];
		this.searchData = [];
		this.searchValue = '';
		this._grid = [];
	}

	willUpdate(changedProperties) {
		this._grid = this.data;

		if (changedProperties.has('searchValue')) {
			// property set by SearchElement
			if (!this.searchValue.length) {
				this._grid = this.data;
			}

			this.searchData = [];
			this.data.map((word) => {
				if (word.name.includes(this.searchValue)) {
					if(!this.searchData.includes(word)) {
						this.searchData.push(word);
					}
				};
			});
			this._grid = this.searchData;
		}

		this._grid.map((object) => {
			// boolean set by FilterByElement
			if (object.checked === true) {
				this._grid = this._grid.filter(
					(boolean) => boolean.checked === true);
			}
		});
	}

	render() {
		return html`
			${this._grid.map(
				(object) => {
					return html`
						<food-btn-element .element=${object}></food-btn-element>
					`
				})
			}
		`;
	}
}

customElements.define('grid-element', GridElement);
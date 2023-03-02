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
		search: { type: Array },
		_grid: { type: Array }
	}

	constructor() {
		super();

		this.data = [];
		this.search = [];
		this._grid = [];
	}

	willUpdate(changedProperties) {
		// this.search a property triggered by SearchElement
		if (!this.search.length) {
			this._grid = this.data;
		} else {
			this._grid = this.search;
		}
	}

	render() {
		return html`
			${
				this._grid.map((object) => {
					return html`
					<food-btn-element .element=${object}></food-btn-element>
					`
				})
			}
		`;
	}
}

customElements.define('grid-element', GridElement);
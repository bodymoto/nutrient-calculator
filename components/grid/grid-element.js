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
		data: { type: Array }
	}

	constructor() {
		super();

		this.data = [];
	}

	render() {
		return html`
			${
				this.data.map((object) => {
					return html`
					<food-btn-element .element=${object}></food-btn-element>
					`
				})
			}
		`;
	}
}

customElements.define('grid-element', GridElement);
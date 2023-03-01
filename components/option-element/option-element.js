import {LitElement, html, css} from 'lit';
import {ItemElement} from './item-element/item-element.js';

export class OptionElement extends LitElement {
	static properties = {
		searchData: { type: Array }
	}

	constructor() {
		super();

		this.searchData = [];
	}

	static styles = css`
		:host {
			margin: 10px;
			border: 1px solid black;
		}
	`;

	render() {
		return html`
			${
				this.searchData.map((object) => {
					return html`
					<item-element .element=${object}></item-element>
					`
				})
			}
		`;
	}
}

customElements.define('option-element', OptionElement);
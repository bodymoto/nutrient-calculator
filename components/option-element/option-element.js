import {LitElement, html, css} from 'lit';
import {ItemElement} from './items/item-element.js';

export class OptionElement extends LitElement {
	static properties = {
		data: { type: Array }
	}

	constructor() {
		super();
		this.data = [];
	}

	static styles = css`
		:host {
			margin: 20px;
			border: 1px solid black;
		}
	`;

	render() {
		return html`
			<p>options-element is here!</p>

			${
				this.data.map((object) => {
					return html`
					<item-element .data=${object} src=${object.src} alt=${object.name}></item-element>
					`
				})
			}
		`;
			// <item-element .data=${this.data} src=${this.data[0].src}></item-element>
	}
}

customElements.define('option-element', OptionElement);
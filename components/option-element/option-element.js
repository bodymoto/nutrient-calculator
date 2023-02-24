import {LitElement, html, css} from 'lit';
import {ItemElement} from './item-element/item-element.js';

export class OptionElement extends LitElement {
	static properties = {
		optionsData: { type: Array }
	}

	constructor() {
		super();
		this.optionsData = [];
	}

	static styles = css`
		:host {
			margin: 20px;
			border: 1px solid black;
		}
	`;

	render() {
		return html`
			${
				this.optionsData.map( (object) => {
					return html`
					<item-element src=${object.src} name=${object.name}></item-element>
					`
				})
			}
		`;
	}
}

customElements.define('option-element', OptionElement);
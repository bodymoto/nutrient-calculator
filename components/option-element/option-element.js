import {LitElement, html, css} from 'lit';
import {ItemElement} from './item-element/item-element.js';

export class OptionElement extends LitElement {
	static properties = {
		options: { type: Array }
	}

	constructor() {
		super();
		this.options = [];
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
				this.options.map( (object) => {
					return html`
					<item-element src=${object.src} name=${object.name}></item-element>
					`
				})
			}
		`;
	}
}

customElements.define('option-element', OptionElement);
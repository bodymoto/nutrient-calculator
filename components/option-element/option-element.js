import {LitElement, html, css} from 'lit';
import {ItemElement} from './items/item-element.js';

export class OptionElement extends LitElement {
	static properties = {}

	constructor() {
		super();
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

			<item-element></item-element>
		`;
	}
}

customElements.define('option-element', OptionElement);
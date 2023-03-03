import {LitElement, html, css} from 'lit';
import {ItemElement} from './item/item-element.js';

export class ListElement extends LitElement {
	static styles = css`
		:host {
			margin: 10px;
			border: 1px solid black;
			height: 60px;
		}
	`;

	static properties = {
		data: { type: Array }
	}

	constructor() {
		super();
		this.data = [];
	}

	willUpdate(changedProperties) {
		if (changedProperties.has('data')) {
			if (!this.data.length) {
				return;
			}
		};
	}

	render() {
		return html`
			${this.data.map(
				(value) => {
					if (value.count <= 0) {
						return;
					}
					return html`
						<item-element .value=${value}></item-element>
					`
				})
			}
		`;
	}
}

customElements.define('list-element', ListElement);
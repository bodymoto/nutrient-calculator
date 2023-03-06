import {LitElement, html, css} from 'lit';
import {ItemElement} from './item/item-element.js';

export class ListElement extends LitElement {
	static styles = css`
		:host {
			height: 140px;
			overflow: scroll;
			margin: 10px;
			border: 1px solid black;
		}
	`;

	static properties = {
		data: { type: Array },
		_valueReset: { type: Array }
	}

	constructor() {
		super();
		this.data = [];
		this._valueReset = [];
	}

	willUpdate(changedProperties) {
		if (changedProperties.has('data')) {
			if (!this.data.length) {
				return;
			}
		};
	}

	handleClick() {
		for (let value of this.data) {
			value.count = 0;
			value = Object.assign({}, value);
			this._valueReset[value.name] = value;
		}
		this.data = this._valueReset;
	}

	render() {
		return html`
			<button @click=${this.handleClick}>Clear all</button>

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
import {LitElement, html, css} from 'lit';
import {ItemElement} from './item/item-element.js';

export class ListElement extends LitElement {
	static styles = css`
		* {
			padding: 0;
			margin: 0;
			border-sizing: border-box;
		}

		:host {
			margin: 10px;
		}

		.item {
			font-family: Trebuchet MS;
			border: 1px solid black;
			height: 140px;
			overflow: auto;
		}

		.button {
			display: flex;
			align-content: center;
			justify-content: center;
		}

		button {
			text-transform: uppercase;
			font-family: Trebuchet MS;
			font-weight: 700;
			letter-spacing: 1px;
			padding: 10px 32px;
			margin: 5px;
			border-radius: 10px;
			background: linear-gradient(0.55turn, 
				rgba(150, 206, 180, 0.8), 
				rgba(255, 238, 173, 0.8), 
				rgba(255, 204, 92, 0.8), 
				rgba(255, 111, 105, 0.8));
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

	async handleClick() {
		const options = {
			bubbles: true,
			composed: true
		};
		await this.updateComplete;
		this.dispatchEvent(new CustomEvent('clear-count', options));
	}

	render() {
		return html`
		<div class="item">
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
		</div>
		<div class="button">
			<button @click=${this.handleClick}>Clear all</button>
		</div>
		`;
	}
}

customElements.define('list-element', ListElement);
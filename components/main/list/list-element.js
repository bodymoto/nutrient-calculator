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
			background-color: #2d2d30;
			user-select: none;
			font-family: Trebuchet MS, Tahoma, sans-serif;
			padding: 30px 0;
		}

		.item {
			border-left: 4px solid rgba(0, 0, 0, 0.2);
			border-right: 4px solid rgba(0, 0, 0, 0.2);
			min-height: 40px;
			max-height: 232px;
			margin: 10px 7px 10px 7px;
			overflow: auto;
			border-radius: 5px;
		}

		p {
			border-radius: 10px 0;
	  	background-color: #3e3e42;
			font-size: 12px;
	  	color: #fff;
			padding: 5px 15px;
			margin: 15px 30px 2px 11px;
	  	letter-spacing: 1px;
		}

		.button {
			display: flex;
			justify-content: center;
			margin: 0 30px 15px 30px;
		}

		button {
			border: none;
			cursor: pointer;
			text-transform: uppercase;
			font-weight: 700;
			padding: 16px 16px;
			border-radius: 10px;
			background: #ff6f69;
			transition-duration: 400ms;
		}

		button:active {
			filter: brightness(140%);
			border-radius: 20px;
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
		<p>Tap listed food to incrementally decrease:</p>
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
			<button @click=${this.handleClick}>clear all selected</button>
		</div>
		`;
	}
}

customElements.define('list-element', ListElement);
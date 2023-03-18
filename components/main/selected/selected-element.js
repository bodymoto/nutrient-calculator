import {LitElement, html, css} from 'lit';
import {ItemElement} from './item/item-element.js';

export class SelectedElement extends LitElement {
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
			padding: 30px 30px 30px 0;
		}

		.item {
			border-left: 4px solid rgba(0, 0, 0, 0.2);
			border-right: 4px solid rgba(0, 0, 0, 0.2);
			height: 180px;
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

		button {
			display: flex;
			margin: auto;
			border: none;
			cursor: pointer;
			text-transform: uppercase;
			font-weight: 700;
			padding: 10px 62px;
			border-radius: 25px;
			background: #ff6f69;
			transition-duration: 300ms;
			box-shadow: -1px 2px 10px black;
		}

		button:active {
			filter: brightness(140%);
			box-shadow: none;
			transform: translate(-1px, 4px);
		}

		@media screen and (min-width: 768px) {
			.item {
				margin: 20px;
			}
			p {
				font-size: 16px;
				padding: 5px 6%;
			}
			button {
				padding: 14px 66px;
			}
		}

		@media screen and (min-width: 1280px) {
			.item {
				margin: 0 20%;
			}
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
		<button @click=${this.handleClick}>clear all</button>
		`;
	}
}

customElements.define('selected-element', SelectedElement);
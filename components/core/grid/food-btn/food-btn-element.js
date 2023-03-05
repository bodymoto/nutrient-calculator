import {LitElement, html, css} from 'lit';

export class FoodButtonElement extends LitElement {
	static styles = css`
		:host {
			display: flex;
			flex-direction: column;
			align-content: center;
			justify-content: center;
			border: 1px solid black;
			border-radius: 10px;
			padding: 8px;
			font-size: 12px;
			text-align: center;
			width: 90px;
			height: 90px;
			cursor: pointer;
		}
		img {
			margin: auto;
			width: 32px;
		}
		p {
			padding: 0;
			margin: 0;
		}
	`;

	static properties = {
		value: { type: Object },
		_name: { type: String },
		_src: { type: String }
	}

	constructor() {
		super();
		this.value = {};
		this._name = '';
		this._src = '';
	}

	willUpdate(changedProperties) {
		this._name = this.value.name;
		this._src = this.value.src;
	}

	render() {
		return html`
		<div>
			<img src=${this._src} alt=${this._name} />
			<p>${this._name.toUpperCase()}</p>
		</div>
		`;
	}
}

customElements.define('food-btn-element', FoodButtonElement);
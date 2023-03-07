import {LitElement, html, css} from 'lit';

export class FoodButtonElement extends LitElement {
	static styles = css`
		:host {

			border-radius: 5px;
			font-size: 12px;
			text-align: center;
			width: 68px;
			height: 68px;
			cursor: pointer;
			user-select: none;
			transition-duration: 0.3s;
		}

		div {
			display: flex;
			align-content: center;
			flex-direction: column;
			margin: 0;
			width: 100%;
			height: 100%;
			border-radius: 10px;
		}

		.name {
			margin-top: 10px;
		}

		p {
			font-family: sans-serif;
			margin: auto;
			color: #FFFF99;
			font-weight: 700;
			text-shadow: -1px 2px 1px black;
			word-break: break-word;
		}

		.count {
			font-size: 22px;
		}
	`;

	static properties = {
		value: { type: Object },
		name: { type: String },
		style: { type: String },
		count: { type: Number }
	}

	constructor() {
		super();
		this.value = {};
		this.name = '';
		this.style = '';
		this.count = 0;
	}

	willUpdate(changedProperties) {
		this.name = this.value.name;
		this.style = this.value.style;
		this.count = this.value.count;
	}

	render() {
		return html`
		<div style="background-color: ${this.style}">
			<div>
				<p class="name">${this.name.toUpperCase()}</p>
				<p class="count">x${this.count}</p>
			</div>
		</div>
		`;
	}
}

customElements.define('food-btn-element', FoodButtonElement);
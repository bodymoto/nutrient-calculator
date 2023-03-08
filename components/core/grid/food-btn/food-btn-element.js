import {LitElement, html, css} from 'lit';

export class FoodButtonElement extends LitElement {
	static styles = css`
		* {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

		:host {
			font-size: 13px;
			text-align: center;
			width: 76px;
			height: 76px;
			cursor: pointer;
			user-select: none;
			transition-duration: 0.3s;
		}

		div {
			display: flex;
			flex-direction: column;
			margin: 0;
			width: 100%;
			height: 100%;
		}

		p {
			font-family: Trebuchet MS;
			font-weight: 700;
			padding: 0 4px;
			color: #FFFF99;
			text-shadow: -1px 2px 1px black;
			word-break: break-word;
		}

		.count {
			font-family: Georgia;
			font-size: 20px;
			margin: 7px;
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
				<p class="count">${this.count}</p>
				<p>${this.name.toUpperCase()}</p>
			</div>
		</div>
		`;
	}
}

customElements.define('food-btn-element', FoodButtonElement);
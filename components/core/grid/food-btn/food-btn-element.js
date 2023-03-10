import {LitElement, html, css} from 'lit';

export class FoodButtonElement extends LitElement {
	static styles = css`
		* {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

		:host {
			text-align: center;
			width: 78px;
			height: 78px;
			cursor: pointer;
			user-select: none;
			transition-duration: 300ms;
		}

		div {
			display: flex;
			flex-direction: column;
			width: 100%;
			height: 100%;
			box-shadow: inset 5px 5px white, inset -5px -5px white;
		}

		p {
			font-family: Trebuchet MS;
			font-size: 12px;
			font-weight: 700;
			padding: 0 6px;
			color: #FFFF99;
			text-shadow: -1px 2px 1px black;
			word-break: break-word;
		}

		.count {
			font-family: Georgia;
			font-size: 23px;
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
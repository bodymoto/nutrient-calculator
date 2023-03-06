import {LitElement, html, css} from 'lit';

export class FoodButtonElement extends LitElement {
	static styles = css`
		:host {
			border: 1px solid black;
			border-radius: 10px;
			font-size: 12px;
			text-align: center;
			width: 59px;
			height: 59px;
			cursor: pointer;
			user-select: none;
			transition-duration: 0.3s;
		}

		div {
			display: flex;
			flex-direction: column;
			align-content: center;
			justify-content: center;
			padding: 0;
			margin: 0;
			width: 100%;
			height: 100%;
			border-radius: 10px;
		}

		p {
			font-family: Andale Mono;
			margin: auto;
			padding: 0 4px 0 4px;
			color: #FFFF99;
			font-weight: 700;
			text-shadow: -1px 2px 1px black;
			word-break: break-word;
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
				<p>${this.name.toUpperCase()}</p>
				<p>x${this.count}</p>
			</div>
		</div>
		`;
	}
}

customElements.define('food-btn-element', FoodButtonElement);
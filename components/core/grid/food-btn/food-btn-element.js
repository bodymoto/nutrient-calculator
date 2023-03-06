import {LitElement, html, css} from 'lit';

export class FoodButtonElement extends LitElement {
	static styles = css`
		:host {
			border: 1px solid black;
			border-radius: 10px;

			font-size: 14px;
			text-align: center;
			width: 59px;
			height: 59px;
			cursor: pointer;
		}

		div {
			display: flex;
			align-content: center;
			justify-content: center;
			padding: 0;
			margin: 0;
			width: 100%;
			height: 100%;
			border-radius: 10px;
		}
		p {
			background-color: black;
			box-shadow: inset 120px 120px 300px rgba(234, 244, 178, .8), inset -120px -120px 300px rgba(0, 0, 0, .8);
			font-family: Andale Mono;
			margin: auto;
			color: white;
			font-weight: 700;
			text-shadow: .5px .5px 1px black;
		}
	`;

	static properties = {
		value: { type: Object },
		name: { type: String },
		style: { type: String }
	}

	constructor() {
		super();
		this.value = {};
		this.name = '';
		this.style = '';
	}

	willUpdate(changedProperties) {
		this.name = this.value.name;
		this.style = this.value.style;
	}

	render() {
		return html`
		<div class="circle" style="background-color: ${this.style}">
			<div>
				<p>${this.name.toUpperCase()}</p>
			</div>
		</div>
		`;
	}
}

customElements.define('food-btn-element', FoodButtonElement);
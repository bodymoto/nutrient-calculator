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
			width: 86px;
			height: 86px;
			cursor: pointer;
			user-select: none;
			transition-duration: 300ms;
		}

		div {
			display: flex;
			border-radius: 5px;
			flex-direction: column;
			width: 100%;
			height: 100%;
			box-shadow: inset 2.5px 2.5px #3e3e42, inset -2.5px -2.5px #3e3e42;
		}

		p {
			font-family: Trebuchet MS, Tahoma, sans-serif;
			font-size: 12px;
			font-weight: 700;
			padding: 0 6px;
			color: #FFFF99;
			text-shadow: -1px 2px 7px black;
			word-break: break-word;
		}

		.count {
			font-family: Georgia, serif;
			font-size: 22px;
			margin: 7px;
		}

		@media screen and (min-width: 768px) {
			:host {
				width: 98px;
				height: 98px;
			}
			p {
				font-size: 14px;
			}
			.count {
				font-size: 24px;
			}
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
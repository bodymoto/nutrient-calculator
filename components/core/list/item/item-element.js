import {LitElement, html, css} from 'lit';

export class ItemElement extends LitElement {
	static styles = css`
		div {
			display: flex;
			align-items: center;
			justify-content: space-around;
			text-shadow: -1px 2px 1px black;
			letter-spacing: 1px;
			font-family: Trebuchet MS;
			font-size: 16px;
			font-weight: 700;
			color: white;
			height: 32px;
		 	margin: 2px 55px 2px 15px;
		 	padding: 2px 4px;
		 	border-top: 1px solid black;
		 	border-bottom: 1px solid black;
		 	box-shadow: inset 40px 40px 5px rgba(0,0,0,0.15);
		}

		div:active {
			filter: brightness(140%);
		}

		.name {
			text-transform: capitalize;
		}
	`;
	
	static properties = {
		value: { type: Object },
		name: { type: String },
		_style: { type: String },
		_count: { type: Number },
		_portion: { type: Number }
	}

	constructor() {
		super();
		this.value = {};
		this.name = '';
		this._style = '';
		this._count = 0;
		this._portion = 0;
	}


	async handleClick() {
		const options = {
			detail: {	name: this.name },
			bubbles: true,
			composed: true
		};

    await this.updateComplete;
		this.dispatchEvent(new CustomEvent('click-subtract', options));
	}

	willUpdate(changedProperties) {
		this.name = this.value.name;
		this._style = this.value.style;
		this._count = this.value.count;
		this._portion = (this._count * this.value.portion);
	}

	render() {
		return html`
			<div @click=${this.handleClick} style="background-color: ${this._style}">
				<p>${this._count}</p>
				<p class="name">${this.name}</p>
				<p>Portion: ${this._portion.toFixed(1)}g</p>
			</div>
		`;
	}
}

customElements.define('item-element', ItemElement);
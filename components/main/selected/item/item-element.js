import {LitElement, html, css} from 'lit';

export class ItemElement extends LitElement {
	static styles = css`
		div {
			cursor: pointer;
			user-select: none;
			display: flex;
			align-items: center;
			text-shadow: -1px 1px 1px black;
			letter-spacing: 1px;
			font-size: 12px;
			font-weight: 700;
			color: white;
			height: 42px;
		 	margin: 2px;
		 	padding: 2px 4px;
		 	border-top: 1px solid black;
		 	border-bottom: 1px solid black;
		 	box-shadow: inset 50px 50px 10px rgba(0,0,0,0.15);
		 	border-radius: 10px;
		}

		div:active {
			filter: brightness(140%);
		}
		 p {
		 	margin: auto;
		 }

		.count,
		.portion,
		.name {
			margin: 10px;
		}

		.count,
		.name {
			font-size: 14px
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
		_portion: { type: Number },
		_comment: { type: String }
	}

	constructor() {
		super();
		this.value = {};
		this.name = '';
		this._style = '';
		this._count = 0;
		this._portion = 0;
		this._comment = '';
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
		this._comment = this.value.comment;
		this._portion = (this._count * this.value.portion);
	}

	render() {
		return html`
			<div @click=${this.handleClick} style="background-color: ${this._style}">
				<p class="count">${this._count}</p>
				<p class="name">${this.name}</p>
				<p>${this._count}x ${this._comment}</p>
				<p class="portion">${this._portion.toFixed(1)}g</p>
			</div>
		`;
	}
}

customElements.define('item-element', ItemElement);
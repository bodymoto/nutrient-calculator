import {LitElement, html, css} from 'lit';

export class ItemElement extends LitElement {
	static styles = css`
		div {
			display: flex;
			align-items: center;
			justify-content: space-around;
			text-transform: uppercase;
			font-family: Trebuchet MS;
			font-size: 16px;
			height: 32px;
		 	margin: 2px 40px 2px 2px;
		 	padding: 2px 4px;
		 	border: 1px solid black;
		}
	`;
	
	static properties = {
		value: { type: Object },
		name: { type: String },
		_count: { type: Number },
		_portion: { type: Number }
	}

	constructor() {
		super();
		this.value = {};
		this.name = '';
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
		this._count = this.value.count;
		this._portion = (this._count * this.value.portion);
	}

	render() {
		return html`
			<div @click=${this.handleClick}>
				<p>${this._count}</p>
				<p>${this.name}</p>
				<p>portion: ${this._portion}g</p>
			</div>
		`;
	}
}

customElements.define('item-element', ItemElement);
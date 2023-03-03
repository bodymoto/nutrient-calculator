import {LitElement, html, css} from 'lit';

export class ItemElement extends LitElement {
	static styles = css`
		 div {
		 	margin: 2px;
		 }
	`;
	
	static properties = {
		value: { type: Object },
		name: { type: String },
		_count: { type: Number }
	}

	constructor() {
		super();
		this.value = {};
		this.name = '';
		this._count = 0;
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
	}

	render() {
		return html`
			<div @click=${this.handleClick}>${this.name}, x${this._count}</div>
		`;
	}
}

customElements.define('item-element', ItemElement);
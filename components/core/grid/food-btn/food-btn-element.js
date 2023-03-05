import {LitElement, html, css} from 'lit';

export class FoodButtonElement extends LitElement {
	static styles = css`
		:host {
			display: flex;
			align-content: center;
			justify-content: center;
			border: 1px solid black;
		}
		img {
			width: 76px;
		}
	`;

	static properties = {
		value: { type: Object },
		name: { type: String },
		src: { type: String }
	}

	constructor() {
		super();
		this.value = {};
		this.name = '';
		this.src = '';
	}

	willUpdate(changedProperties) {
		this.name = this.value.name;
		this.src = this.value.src;
	}

	async handleClick() {
		const options = {
			detail: {	name: this.name },
			bubbles: true,
			composed: true
		};

    await this.updateComplete;
		this.dispatchEvent(new CustomEvent('click-add', options));
	}

	render() {
		return html`
			<img @click=${this.handleClick} src=${this.src} alt=${this.name} />
		`;
	}
}

customElements.define('food-btn-element', FoodButtonElement);
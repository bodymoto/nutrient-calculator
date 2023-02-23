import {LitElement, html, css} from 'lit';

export class ItemElement extends LitElement {
	static properties = {
		data: { type: Object },
		src: { type: String },
		alt: { type: String },
		count: { type: Number }
	}

	constructor() {
		super();
		this.data = {};

		this.src = '';
		this.alt = '';
		this.count = 0;
	}

	static styles = css`
		:host {
			display: flex;
			align-content: center;
			justify-content: space-evenly;

			border: 1px solid black;
			margin: auto;
		}
		img {
			width: 82px;
		}
	`;

	async handleClick() {
		const options = {
			detail: {	filter: this },
			bubbles: true,
			composed: true
		};

    await this.updateComplete;
		this.dispatchEvent(new CustomEvent('click-add', options));
	}

	render() {
		return html`
			<img @click=${this.handleClick} src=${this.src} alt=${this.alt} />
		`;
	}
}

customElements.define('item-element', ItemElement);
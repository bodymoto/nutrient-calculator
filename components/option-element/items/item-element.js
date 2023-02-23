import {LitElement, html, css} from 'lit';

export class ItemElement extends LitElement {
	static properties = {
		src: { type: String },
		name: { type: String }
	}

	constructor() {
		super();

		this.src = '';
		this.name = '';
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
			detail: {	target: this.name },
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

customElements.define('item-element', ItemElement);
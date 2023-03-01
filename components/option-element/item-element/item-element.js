import {LitElement, html, css} from 'lit';

export class ItemElement extends LitElement {
	static properties = {
		element: { type: Object }
	}

	constructor() {
		super();

		this.element = {};
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
			detail: {	element: this.element },
			bubbles: true,
			composed: true
		};

    await this.updateComplete;
		this.dispatchEvent(new CustomEvent('click-add', options));
	}

	render() {
		return html`
			<img @click=${this.handleClick} src=${this.element.src} alt=${this.element.name} />
		`;
	}
}

customElements.define('item-element', ItemElement);
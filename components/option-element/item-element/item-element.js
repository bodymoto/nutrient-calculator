import {LitElement, html, css} from 'lit';

export class ItemElement extends LitElement {
	static properties = {
		element: { type: Object },
		name: { type: String },
		src: { type: String }
	}

	constructor() {
		super();

		this.element = {};
		this.name = '';
		this.src = '';
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

	willUpdate(changedProperties) {
		this.name = this.element.name;
		this.src = this.element.src;
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

customElements.define('item-element', ItemElement);
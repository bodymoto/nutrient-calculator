import {LitElement, html, css} from 'lit';

export class TargetElement extends LitElement {
	static properties = {
		element: { type: Object },
		name: { type: String },
		count: { type: Number }
	}

	constructor() {
		super();

		this.element = {};
		this.name = '';
		this.count = null;
	}

	static styles = css`
		 div {
		 	margin: 2px;
		 }
	`;

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
		this.name = this.element.name;
		this.count = this.element.count;
	}

	render() {
		return html`
			<div @click=${this.handleClick}>${this.name}, x${this.count}</div>
		`;
	}
}

customElements.define('target-element', TargetElement);
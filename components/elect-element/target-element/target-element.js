import {LitElement, html, css} from 'lit';

export class TargetElement extends LitElement {
	static properties = {
		name: { type: String },
		count: { type: Number }
	}

	constructor() {
		super();

		this.name = '';
		this.count = 0;
	}

	static styles = css``;

	async handleClick() {
		this.count--;

		const options = {
			detail: {	target: this.name },
			bubbles: true,
			composed: true
		};

    await this.updateComplete;
		this.dispatchEvent(new CustomEvent('click-subtract', options));
	}

	render() {
		return html`
			<p @click=${this.handleClick}>${this.name}, x${this.count}</p>
		`;
	}
}

customElements.define('target-element', TargetElement);
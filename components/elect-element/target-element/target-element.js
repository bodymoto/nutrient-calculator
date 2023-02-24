import {LitElement, html, css} from 'lit';

export class TargetElement extends LitElement {
	static properties = {
		name: { type: String }
	}

	constructor() {
		super();

		this.name = '';
	}

	static styles = css``;

	async handleClick() {
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
			<p @click=${this.handleClick}>${this.name}</p>
		`;
	}
}

customElements.define('target-element', TargetElement);
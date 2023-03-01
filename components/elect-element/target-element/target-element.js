import {LitElement, html, css} from 'lit';

export class TargetElement extends LitElement {
	static properties = {
		element: { type: Object }
	}

	constructor() {
		super();

		this.element = {};
	}

	static styles = css`
	 li {
	 	margin: 2px;
	 }
	`;

	async handleClick() {
		const options = {
			detail: {	element: this.element },
			bubbles: true,
			composed: true
		};

    await this.updateComplete;
		this.dispatchEvent(new CustomEvent('click-subtract', options));
	}

	willUpdate(changedProperties) {
		console.log(changedProperties);
		// here???
	}

	render() {
		return html`
			<li @click=${this.handleClick}>${this.element.name}, x${this.element.count}</li>
		`;
	}
}

customElements.define('target-element', TargetElement);
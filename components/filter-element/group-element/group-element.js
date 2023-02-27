import {LitElement, html, css} from 'lit';

export class GroupElement extends LitElement {
	static properties = {
		name: { type: String }
	}

	constructor() {
		super();

		this.name = '';
	}

	static styles = css`
		p {
			margin: 0;
		}
	`;

	render() {
		return html`
			<input @change=${this.handleChecked} type="checkbox" ?checked=${this.checked} for=${this.label}>
			<label @click=${this.handleClick} for=${this.label}>${this.name}</label>
		`;
	}
}

customElements.define('group-element', GroupElement);
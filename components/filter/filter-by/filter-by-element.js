import {LitElement, html, css} from 'lit';

export class FilterByElement extends LitElement {
	static properties = {
		name: { type: String },
		checked: { type: Boolean }
	}

	constructor() {
		super();

		this.name = '';
		this.checked = false;
	}

	static styles = css`
		p {
			margin: 0;
		}
	`;

	async handleClick() {
		this.shadowRoot.querySelector('input').click();
	}

	async handleChecked(event) {
		this.checked = event.target.checked;
		
		const options = {
			detail: {	filter: this },
			bubbles: true,
			composed: true
		};

    await this.updateComplete;
		this.dispatchEvent(new CustomEvent('filter-event', options));
	}

	render() {
		return html`
			<input @change=${this.handleChecked} type="checkbox" ?checked=${this.checked} name=${this.name}>
			<label @click=${this.handleClick} for=${this.name}>${this.name}</label>
		`;
	}
}

customElements.define('filter-by-element', FilterByElement);
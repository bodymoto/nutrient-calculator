import {LitElement, html, css} from 'lit';

export class FilterByElement extends LitElement {
	static styles = css`
		label,
		input {
			cursor: pointer;
		}
	`;

	static properties = {
		group: { type: String },
		checked: { type: Boolean },
		searchValue: { type: String }
	}

	constructor() {
		super();
		this.group = '';
		this.checked = false;
		this.searchValue = '';
	}

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

	willUpdate(changedProperties) {
		if (changedProperties.has('searchValue')) {
			if (this.searchValue.length) {
				this.shadowRoot.querySelector('input').checked = false;
			}
		}
	}

	render() {
		return html`
			<input @change=${this.handleChecked} type="checkbox" ?checked=${this.checked} group=${this.group}>
			<label @click=${this.handleClick} for=${this.group}>${this.group}</label>
		`;
	}
}

customElements.define('filter-by-element', FilterByElement);
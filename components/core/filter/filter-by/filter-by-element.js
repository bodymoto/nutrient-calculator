import {LitElement, html, css} from 'lit';

export class FilterByElement extends LitElement {
	static styles = css`
	  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
		:host {
			display: flex;
			flex-wrap: wrap;
			align-items: center;
		}

		label,
		input {
			cursor: pointer;
			user-select: none;
		}

		input[type="checkbox"] {
			appearance: none;
			background-color: white;
			width: 16px;
			height: 16px;
			border: 1px solid #FFFF99;
			border-radius: 2px;
		}

		label {
			padding: 6px;
			padding-left: 0;
			font-size: 16px;
			font-weight: 700;
			color: #FFFF99;
			font-family: sans-serif;
		}
	`;

	static properties = {
		group: { type: String },
		checked: { type: Boolean },
		style: { type: String }
		// searchValue: { type: String }
	}

	constructor() {
		super();
		this.group = '';
		this.checked = false;
		this.style = '';
		// this.searchValue = '';
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
		// if (changedProperties.has('searchValue')) {
		// 	if (this.searchValue.length) {
		// 		this.shadowRoot.querySelector('input').checked = false;
		// 	}
		// }
	}

	render() {
		return html`
			<input style="background-color: ${this.style}" @change=${this.handleChecked} type="checkbox" ?checked=${this.checked} group=${this.group}>
			<label style="background-color: ${this.style}" @click=${this.handleClick} for=${this.group}>${this.group.toUpperCase()}</label>
		`;
	}
}

customElements.define('filter-by-element', FilterByElement);
import {LitElement, html, css} from 'lit';
import {GroupElement} from './group-element/group-element.js';

export class FilterElement extends LitElement {
	static properties = {
		filterData: { type: Array }
	}

	constructor() {
		super();

		this.filterData = [];
	}

	// search by object.group

	static styles = css`
		:host {
			margin: 10px;
			border: 1px solid black;
		}
	`;

	render() {
		return html`
			${
				this.filterData.map((object) => {
					return html`
						<group-element name=${object.group}></group-element>
					`
				})
			}
		`;
	}
}

customElements.define('filter-element', FilterElement);
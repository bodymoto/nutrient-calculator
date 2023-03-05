import {LitElement, html, css} from 'lit';
import {FilterByElement} from './filter-by/filter-by-element.js';

export class FilterElement extends LitElement {
	static styles = css`
		:host {
			margin: 10px;
			border: 1px solid black;
		}
	`;

	static properties = {
		data: { type: Array },
		searchValue: { type: String },
		_dataGroups: { type: Array },
		_uniqueValues: { type: Array }
	}

	constructor() {
		super();
		this.data = [];
		this.searchValue = '';
		this._dataGroups = [];
		this._uniqueValues = [];
	}

	willUpdate(changedProperties) {
		if (changedProperties.has('data')) {
			if (!this.data.length) {
				return;
			}
			this._dataGroups = this.data.map(
				(object) => this._dataGroups[object.group] = object.group);
			this._uniqueValues = this._dataGroups.filter(
				(element, index) => {
				return this._dataGroups.indexOf(element) === index;
			});
		}

		if (changedProperties.has('searchValue')) {
			if (this.searchValue.length) {
				this.data.map((object) => object.checked = false);
			}
		}
	}

	render() {
		return html`
			${this._uniqueValues.map(
				(value) => {
					return html`
						<filter-by-element group=${value} searchValue=${this.searchValue}></filter-by-element>
					`
				})
			}
		`;
	}
}

customElements.define('filter-element', FilterElement);
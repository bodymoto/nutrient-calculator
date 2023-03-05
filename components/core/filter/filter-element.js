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
		_copyGroups: { type: Object },
		unique: { type: Array }
	}

	constructor() {
		super();
		this.data = [];
		this.searchValue = '';
		this._copyGroups = {};
		this.unique = [];
	}

	willUpdate(changedProperties) {
		if (changedProperties.has('data')) {
			if (!this.data.length) {
				return;
			}
			this._copyGroups = this.data.map(
				(object) => this._copyGroups[object.group] = object.group);
			this.unique = this._copyGroups.filter((element, index) => {
				return this._copyGroups.indexOf(element) === index;
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
			${this.unique.map(
				(object) => {
					return html`
						<filter-by-element group=${object} searchValue=${this.searchValue}></filter-by-element>
					`
				})
			}
		`;
	}
}

customElements.define('filter-element', FilterElement);
import {LitElement, html, css} from 'lit';
import {FilterByElement} from './filter-by/filter-by-element.js';

export class FilterElement extends LitElement {
	static styles = css`
	  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
		:host {
			display: flex;
			flex-wrap: wrap;
			flex-direction: column;
			justify-content: center;
			gap: 6px;
			height: 200px;
			margin: 10px;
			padding: 10px 18px;
			border: 1px solid black;
		}
	`;

	static properties = {
		data: { type: Array },
		// searchValue: { type: String },
		_dataGroups: { type: Array },
		_dataStyles: { type: Array },
		_uniqueGroups: { type: Array },
		_uniqueStyles: { type: Array }
	}

	constructor() {
		super();
		this.data = [];
		// this.searchValue = '';
		this._dataGroups = [];
		this._dataStyles = [];
		this._uniqueGroups = [];
		this._uniqueStyles = [];
	}

	willUpdate(changedProperties) {
		if (changedProperties.has('data')) {
			if (!this.data.length) {
				return;
			}

			this._dataGroups = this.data.map(
				(object) => this._dataGroups[object.group] = object.group);
			this._uniqueGroups = this._dataGroups.filter(
				(element, index) => {
				return this._dataGroups.indexOf(element) === index;
			});

			this._dataStyles = this.data.map(
				(object) => this._dataStyles[object.style] = object.style);
			this._uniqueStyles = this._dataStyles.filter(
				(element, index) => {
				return this._dataStyles.indexOf(element) === index;
			});
		}

		// if (changedProperties.has('searchValue')) {
		// 	if (this.searchValue.length) {
		// 		this.data.map((object) => object.checked = false);
		// 	}
		// }
	}

	render() {
		return html`
			${this._uniqueGroups.map(
				(value, index) => {
					return html`
						<filter-by-element style=${this._uniqueStyles[index]} group=${value} searchValue=${this.searchValue}></filter-by-element>
					`
				})
			}
		`;
	}
}

customElements.define('filter-element', FilterElement);
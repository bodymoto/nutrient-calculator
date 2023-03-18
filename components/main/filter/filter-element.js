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
			height: 400px;
			display: flex;
			flex-wrap: wrap;
			flex-direction: column;
			align-content: start;
			gap: 10px 0;
			padding: 2px 12px 25px 12px;
		}

		div {
			display: block;
		}

	  p {
	  	background-color: #3e3e42;
	  	clip-path: polygon(97% 0, 100% 50%, 97% 100%, 0 100%, 0 0);
	  	color: #fff;
	  	font-size: 14px;
	  	padding: 5px 15px;
	  	letter-spacing: 1px;
	  }

	  @media screen and (min-width: 768px) {
	  	:host {
				height: 285px;
				gap: 10px 10px;
				padding: 10px 16px 60px 16px;
			}
	  }

	  @media screen and (min-width: 1024px) {
	  	:host {
				height: 240px;
			}
	  }

	  @media screen and (min-width: 1280px) {
	  	:host {
				padding: 2% 10% 4% 10%;
			}
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
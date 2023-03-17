import {LitElement, html, css} from 'lit';
import {FilterHeadElement} from './filter/filter-head-element.js';
import {FilterElement} from './filter/filter-element.js';
import {GridHeadElement} from './grid/grid-head-element.js';
import {GridElement} from './grid/grid-element.js';
import {SelectedElement} from './selected/selected-element.js';
import {CalculateElement} from './calculate/calculate-element.js';
import {SocialElement} from './social/social-element.js';
import {AboutElement} from './about/about-element.js';
// import {SearchElement} from './search/search-element.js';

export class MainElement extends LitElement {
	static styles = css`
	  main {
	  	display: flex;
	  	align-content: center;
	  	justify-content: center;
	  	flex-direction: column;
	  }

	  a {
			text-decoration: none;
			cursor: pointer;
		}

		a:link {
			color: #2d2d30;
		}

		a:visited {
			color: #ffb6b9;
		}

		a:hover {
			color: #ff6f69;
		}

		a:active {
			color: #96ceb4;
		}
	`;

	static properties = {
		data: { type: Array },
		// searchValue: { type: String },
		_filtered: { type: Array },
		_copyValues: { type: Array },
		_name: { type: String },
		_group: { type: String },
		_checked: { type: Boolean },
		_valueReset: { type: Array }
	}

	constructor() {
		super();
		this.data = [];
		// this.searchValue = '';
		this._filtered = [];
		this._copyValues = [];
		this._name = '';
		this._group = '';
		this._checked = false;
		this._valueReset = [];

		this.addEventListener('clear-count', () => {
			for (let value of this.data) {
				value.count = 0;
				value = Object.assign({}, value);
				this._valueReset[value.name] = value;
			}
			this.data = Object.values(this._valueReset);
		});

		// this.addEventListener('search-input', (event) => {
		// 	// listening to SearchElement
		// 	this.searchValue = event.detail.input;
		// });
		
		this.addEventListener('filter-event', (event) => {
			// listening to FilterByElement
			this._group = event.detail.filter.group; // 'fruit'
			this._checked = event.detail.filter.checked // true

			for (let value of this.data) {
				if (value.group === this._group) {
					value.checked = this._checked;
					value = Object.assign({}, value);
				}
				// value.name must be unique
				this._filtered[value.name] = value;
			}
			this.data = Object.values(this._filtered);
		});

		this.addEventListener('click-subtract', (event) => {
			// listening to ItemElement
			this._name = event.detail.name; // 'banana'

			for (let value of this.data) {
				if (value.name === this._name) {
					value.count--;
					if (value.count <= 0){
						value.count = 0;
					}
					// trigger render by reassigning Object in memory
					value = Object.assign({}, value);
				}
				this._copyValues[value.name] = value;
			}
			this.data = Object.values(this._copyValues);
		});

		this.addEventListener('click-add', (event) => {
			// listening to FoodButtonElement
			this._name = event.detail.name; // 'banana'

			for (let value of this.data) {
				if (value.name === this._name) {
					value.count++;
					// trigger render by reassigning Object in memory
					value = Object.assign({}, value);
				}
				this._copyValues[value.name] = value;
			}
			this.data = Object.values(this._copyValues);
		});
	}

	willUpdate(changedProperties) {
		if (changedProperties.has('data')) {
			if (!this.data.length) {
				return;
			};
		};
	}

	render() {
		// <search-element></search-element>
		return html`
		<main>
			<filter-head-element></filter-head-element>
			<filter-element .data=${this.data} searchValue=${this.searchValue}></filter-element>

			<grid-head-element></grid-head-element>
			<grid-element .data=${this.data} searchValue=${this.searchValue} ></grid-element>

			<selected-element .data=${this.data}></selected-element>

			<calculate-element .data=${this.data}></calculate-element>

			<social-element></social-element>

			<about-element></about-element>
		</main>
		`;
	}
}

customElements.define('main-element', MainElement);
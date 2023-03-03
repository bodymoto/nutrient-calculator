import {LitElement, html, css} from 'lit';
import {AggregateElement} from './aggregate/aggregate-element.js';
import {ListElement} from './list/list-element.js';
import {SearchElement} from './search/search-element.js';
import {FilterElement} from './filter/filter-element.js';
import {GridElement} from './grid/grid-element.js';


export class CoreElement extends LitElement {
	static styles = css`
	  :host {
	  	display: flex;
	  	align-content: center;
	  	justify-content: center;
	  	flex-direction: column;
	  }
	`;

	static properties = {
		data: { type: Array },
		searchValue: { type: String },
		_filtered: { type: Array },
		_copyValues: { type: Array },
		_name: { type: String },
		_group: { type: String },
		_checked: { type: Boolean }
	}

	constructor() {
		super();
		this.data = [];
		this.searchValue = '';
		this._filtered = [];
		this._copyValues = [];
		this._name = '';
		this._group = '';
		this._checked = false;

		this.addEventListener('search-input', (event) => {
			// listening to SearchElement
			this.searchValue = event.detail.input;
		});
		
		this.addEventListener('filter-event', (event) => {
			// listening to FilterByElement
			this._group = event.detail.filter.group; // 'fruit'
			this._checked = event.detail.filter.checked // true

			for (let value of this.data) {
				if (value.group === this._group) {
					value.checked = this._checked;
					value = Object.assign({}, value);
				}
				this._filtered[value.group] = value; 
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
		return html`
			<aggregate-element .data=${this.data}></aggregate-element>
			<list-element .data=${this.data}></list-element>
			<search-element></search-element>
			<filter-element .data=${this.data} searchValue=${this.searchValue}></filter-element>
			<grid-element .data=${this.data} searchValue=${this.searchValue} ></grid-element>
		`;
	}
}

customElements.define('core-element', CoreElement);
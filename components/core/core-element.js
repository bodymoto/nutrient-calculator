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
		filtered: { type: Array },
		copyElements: { type: Array }
	}

	constructor() {
		super();
		this.data = [];
		this.searchValue = ''; // for 'search-input'
		this.filtered = []; // for 'filter-event'
		this.copyElements = []; // for 'click-subtract'

		this.addEventListener('search-input', (event) => {
			// listening to SearchElement
			this.searchValue = event.detail.input;
		});
		
		this.addEventListener('filter-event', (event) => {
			// listening to FilterByElement
			const group = event.detail.filter.group; // 'fruit'
			const checked = event.detail.filter.checked // true

			for (let value of this.data) {
				if (value.group === group) {
					value.checked = checked;
					value = Object.assign({}, value);
				}
				this.filtered[value.group] = value; 
			}
			this.data = Object.values(this.filtered);
		});

		this.addEventListener('click-subtract', (event) => {
			// listening to ItemElement
			const name = event.detail.name; // 'banana'

			for (let value of this.data) {
				if (value.name === name) {
					value.count--;
					if (value.count <= 0){
						value.count = 0;
					}
					// trigger render by reassigning Object in memory
					value = Object.assign({}, value);
				}
				this.copyElements[value.name] = value;
			}
			this.data = Object.values(this.copyElements);
		});

		this.addEventListener('click-add', (event) => {
			// listening to FoodButtonElement
			const name = event.detail.name; // 'banana'

			for (let value of this.data) {
				if (value.name === name) {
					value.count++;
					// trigger render by reassigning Object in memory
					value = Object.assign({}, value);
				}
				this.copyElements[value.name] = value;
			}
			this.data = Object.values(this.copyElements);
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
			<filter-element .data=${this.data}></filter-element>
			<grid-element .data=${this.data} .searchData=${this.searchData} searchValue=${this.searchValue} ></grid-element>
		`;
	}
}

customElements.define('core-element', CoreElement);
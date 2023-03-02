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

		groups: { type: Array },
		filtered: { type: Object },
		
		copyElements: { type: Array },
		searchValue: { type: String },
		searchData: { type: Array }
	}

	constructor() {
		super();
		this.data = [];

		this.groups = [];
		this.filtered = {};

		this.copyElements = [];
		this.searchValue = '';
		this.searchData = [];

		// listening to SearchElement
		this.addEventListener('search-input', (event) => {
			this.searchValue = event.detail.input;

			this.searchData = [];
			this.data.map((word) => {
				if (word.name.includes(this.searchValue)) {
					if(!this.searchData.includes(word)) {
						this.searchData.push(word);
					}
				};
			});
		});
		
		// listening to ItemElement
		this.addEventListener('click-subtract', (event) => {
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

		// listening to FoodButtonElement
		this.addEventListener('click-add', (event) => {
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

		// listening to FilterByElement
		this.addEventListener('filter-event', (event) => {
			const group = event.detail.filter.group; // 'fruit'
			const checked = event.detail.filter.checked // true

			this.groups[group] = {'group': group, 'checked': checked};
			this.filtered = Object.values(this.groups);
			// (2) [{'group': 'fruit', 'checked': true}, {...}]

			// this.filtered = Object.assign({'group': group, 'checked': checked});
			console.log(this.filtered);

			// this.groups = [];
			// for (let value of this.data) {
			// 	if (value.group === group) {
			// 		value = Object.assign({}, value);
			// 		this.groups[value.group] = value;
			// 	}
			// }
			// this.searchData = Object.values(this.groups);
		});
	}

	willUpdate(changedProperties) {
		if (changedProperties.has('data')) {
			if (!this.data.length) {
				return;
			};
		};
	}

		// <aggregate-element .totals=${this.electData}></aggregate-element>

	render() {
		return html`
		<list-element .data=${this.data}></list-element>
		<search-element></search-element>

		<filter-element .data=${this.data}></filter-element>

		<grid-element .data=${this.data} .searchData=${this.searchData} ></grid-element>
		`;
	}
}

customElements.define('core-element', CoreElement);
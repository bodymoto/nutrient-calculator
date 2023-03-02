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
		
		electData: { type: Array },
		copyElements: { type: Array },

		checked: { type: Object },

		searchValue: { type: String },
		searchData: { type: Array },

		optionsData: { type: Array }
	}

	constructor() {
		super();
		this.data = [];

		this.electData = [];
		this.copyElements = [];

		this.checked = {};

		this.searchValue = '';
		this.searchData = [];

		this.optionsData = [];

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
			let name = event.detail.name;

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
			let name = event.detail.name;

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

		// listening to FilterElement
		this.addEventListener('filter-event', (event) => {
			const group = event.detail.filter.name; // 'fruit'
			const checked = event.detail.filter.checked; // true

			let arr = this.data.filter((object) => {
				if (object.group === group) {
					console.log(object.group);
				}
			});
			console.log(arr);

			this.checked.group = group;
			this.checked.checked = checked;
			// {group: 'fruit', checked: true}

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
		<aggregate-element .totals=${this.electData}></aggregate-element>
		
		<list-element .data=${this.data}></list-element>
		<search-element></search-element>

		<filter-element .filterData=${this.optionsData}></filter-element>

		<grid-element .data=${this.data} .search=${this.searchData} ></grid-element>
		`;
	}
}

customElements.define('core-element', CoreElement);
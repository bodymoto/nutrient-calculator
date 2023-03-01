import {LitElement, html, css} from 'lit';
import {CountElement} from './count-element/count-element.js';
import {ElectElement} from './elect-element/elect-element.js';
import {SearchElement} from './search-element/search-element.js';
import {FilterElement} from './filter-element/filter-element.js';
import {OptionElement} from './option-element/option-element.js';


export class BodyElement extends LitElement {
	static properties = {
		data: { type: Array },
		
		electData: { type: Array },
		added: { type: Array },
		element: { type: Array },

		checked: { type: Object },

		searchValue: { type: String },
		searchData: { type: Array },

		optionsData: { type: Array }
	}

	constructor() {
		super();
		this.data = [];

		this.electData = [];
		this.added = [];
		this.element = [];

		this.checked = {};

		this.searchValue = '';
		this.searchData = [];

		this.optionsData = [];

		// linked to search-element
		this.addEventListener('search-input', (event) => {
			this.searchValue = event.detail.input;

			this.searchData = [];
			this.optionsData.map((word) => {
				if (word.name.includes(this.searchValue)) {
					if(!this.searchData.includes(word)) {
						this.searchData.push(word);
					}
				};
			});
		});
		
		this.addEventListener('click-subtract', (event) => {
			let element = event.detail.element;
			element.count--;

			let arr = [];
			this.electData.forEach((item) => {
				item = Object.assign({}, item);
				if (item.count === 0){
					let arr = Object.values(this.element);
					for(const value of this.searchData) {
						if(item.name === value.name){
							value.count = 0;
						}
					}
					// console.log(this.searchData)
					return;
				}
				arr.push(item);
			})
			this.electData = arr;
		});

		this.addEventListener('click-add', (event) => {
			// console.log(this.searchData);
			let element = event.detail.element;
			element.count++;

			// later referenced to reset count in subtract event due to same Object as OptionsElement
			this.element[element.name] = element;

			// a new Object triggers render later-on in target-element
			element = Object.assign({}, element);

			this.added[element.name] = element;
			// (2) { banana: {...}, avocado: {...} }
			this.electData = Object.values(this.added);
		});

		// linked to filter-element
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

	static styles = css`
	  :host {
	  	display: flex;
	  	align-content: center;
	  	justify-content: center;
	  	flex-direction: column;
	  }
	`;

	willUpdate(changedProperties) {
		if (changedProperties.has('data')) {
			if (!this.data.length) {
				return;
			};

			this.optionsData = this.data;
			this.searchData = this.data;
		};
	}

		// <search-element></search-element>

		// <filter-element .filterData=${this.optionsData}></filter-element>

	render() {
		return html`
		<count-element .totals=${this.electData}></count-element>

		<elect-element .electData=${this.electData}></elect-element>

		<option-element .searchData=${this.searchData} ></option-element>
		`;
	}
}

customElements.define('body-element', BodyElement);
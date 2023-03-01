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

		checked: { type: Object },

		searchValue: { type: String },
		searchData: { type: Array },
		selectedData: { type: Array },
		optionsData: { type: Array }
	}

	constructor() {
		super();
		this.data = [];

		this.electData = [];
		this.added = [];

		this.checked = {};

		this.searchValue = '';
		this.searchData = [];
		this.selectedData = [];
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
		
		// linked to elect-element
		this.addEventListener('click-subtract', (event) => {
			const name = event.detail.target;
			let clickedElement = this.selectedData.filter((object) => object.name === name); // (1) [{...}]

			clickedElement[0].count--;

			if (clickedElement[0].count <= 0) {
				if (this.selectedData.includes(clickedElement[0])) {
					this.selectedData = this.selectedData.filter((object) => object.name !== clickedElement[0].name);
				};
			};
		});

		this.addEventListener('click-add', (event) => {
			let element = event.detail.element;
			element.count++;
			// a new Object triggers render later-on in target-element
			element = Object.create(element);
			// (2) { banana: {...}, avocado: {...} }
			this.added[element.name] = element;
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

	// generateOptions() {
	// 	// setup the values necessary for OptionElement
	// 	this.data.forEach( (object) => {
	// 		let item = {};

	// 		item.src = object.src;
	// 		item.group = object.group;
	// 		item.name = object.name;
	// 		item.count = object.count;

	// 		this.optionsData.push(item);
	// 	});
	// }

	willUpdate(changedProperties) {
		if (changedProperties.has('data')) {
			if (!this.data.length) {
				return;
			};

			// this.generateOptions();
			this.optionsData = this.data;
			this.searchData = this.data;
		};
	}

		// <search-element></search-element>

		// <filter-element .filterData=${this.optionsData}></filter-element>

	render() {
		return html`
		<count-element .totals=${this.selectedData}></count-element>

		<elect-element .electData=${this.electData} .selectedData=${this.selectedData}></elect-element>

		<option-element .searchData=${this.searchData} ></option-element>
		`;
	}
}

customElements.define('body-element', BodyElement);
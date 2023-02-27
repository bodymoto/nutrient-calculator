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

		keystroke: { type: Array },
		searching: { type: String },
		searchData: { type: Array },
		selectedData: { type: Array },
		optionsData: { type: Array }
	}

	constructor() {
		super();
		this.data = [];

		this.electData = [];

		this.keystroke = [];
		this.searching = '';
		this.searchData = [];
		this.selectedData = [];
		this.optionsData = [];

		// linked to search-element
		this.addEventListener('search-input', (event) => {

			// build out search to prevent breaking if text is highlighted and clipped or cut with a mouse, rather than using backspace
			if (event.detail.input == null) {
				this.keystroke.pop();
			} else {
				this.keystroke.push(event.detail.input);
			}
			this.searching = this.keystroke.join('');

			this.searchData = [];
			this.optionsData.map((word) => {
				if (word.name.includes(this.searching)) {
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

		// linked to options-element
		this.addEventListener('click-add', (event) => {
			const name = event.detail.target;
			this.electData = this.data.filter((object) => object.name === name); // (1) [{...}]

			this.electData[0].count++;
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

	generateOptions() {
		// setup the values necessary for OptionElement
		this.data.forEach( (object) => {
			let item = {};

			item.src = object.src;
			item.group = object.group;
			item.name = object.name;
			item.count = object.count;

			this.optionsData.push(item);
		});
	}

	willUpdate(changedProperties) {
		if (changedProperties.has('data')) {
			if (!this.data.length) {
				return;
			};

			this.generateOptions();
			this.searchData = this.optionsData;
		};
	}

	render() {
		return html`
		<count-element .totals=${this.selectedData}></count-element>

		<elect-element .electData=${this.electData} .selectedData=${this.selectedData}></elect-element>

		<search-element></search-element>

		<filter-element></filter-element>

		<option-element .searchData=${this.searchData} ></option-element>
		`;
	}
}

customElements.define('body-element', BodyElement);
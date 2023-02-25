import {LitElement, html, css} from 'lit';
import {CountElement} from './count-element/count-element.js';
import {ElectElement} from './elect-element/elect-element.js';
import {FilterElement} from './filter-element/filter-element.js';
import {OptionElement} from './option-element/option-element.js';


export class BodyElement extends LitElement {
	static properties = {
		data: { type: Array },
		electData: { type: Array },
		storage: { type: Array },
		optionsData: { type: Array }
	}

	constructor() {
		super();
		this.data = [];
		this.electData = [];
		this.storage = [];
		this.optionsData = [];
		
		this.addEventListener('click-add', (event) => {
			const name = event.detail.target;
			this.electData = this.data.filter((object) => object.name === name); // (1) [{...}]

			this.electData[0].count++;
		});

		this.addEventListener('click-subtract', (event) => {
			const name = event.detail.target;
			let clickedElement = this.storage.filter((object) => object.name === name); // (1) [{...}]

			clickedElement[0].count--;

			if (clickedElement[0].count <= 0) {
				if (this.storage.includes(clickedElement[0])) {
					this.storage = this.storage.filter((object) => object.name !== clickedElement[0].name);
				};
			};
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
		// extract the key/values necessary for OptionElement
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
		};
	}

	render() {
		// <count-element></count-element>
		return html`
		<elect-element .electData=${this.electData} .storage=${this.storage}></elect-element>

		<filter-element .filterData=${this.optionsData}></filter-element>

		<option-element .optionsData=${this.optionsData}></option-element>
		`;
	}
}

customElements.define('body-element', BodyElement);
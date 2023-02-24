import {LitElement, html, css} from 'lit';
import {CountElement} from './count-element/count-element.js';
import {ElectElement} from './elect-element/elect-element.js';
import {FilterElement} from './filter-element/filter-element.js';
import {OptionElement} from './option-element/option-element.js';


export class BodyElement extends LitElement {
	static properties = {
		data: { type: Array },
		electData: { type: Array },
		optionsData: { type: Array }
	}

	constructor() {
		super();
		this.data = [];
		this.electData = [];
		this.optionsData = [];
		
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
		// extract the key/values necessary for OptionElement's
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
			this.generateOptions();
		}
	}

	render() {
		// <count-element></count-element>
		// <filter-element></filter-element>
		return html`
		<elect-element .electData=${this.electData}></elect-element>
		<option-element .optionsData=${this.optionsData}></option-element>
		`;
	}
}

customElements.define('body-element', BodyElement);
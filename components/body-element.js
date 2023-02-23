import {LitElement, html, css} from 'lit';
import {CountElement} from './count-element/count-element.js';
import {ElectElement} from './elect-element/elect-element.js';
import {FilterElement} from './filter-element/filter-element.js';
import {OptionElement} from './option-element/option-element.js';


export class BodyElement extends LitElement {
	static properties = {
		data: { type: Array },
		selected: { type: Object },
		options: { type: Array }
	}

	constructor() {
		super();
		this.data = [];
		this.selected = {};
		this.options = [];
		
		this.addEventListener('click-add', (event) => {
			const name = event.detail.target;
			const element = this.data.filter( (object) => object.name === name);
			this.selected = element[0]; // (1) {...}
			// pass down object to elect-element
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
		this.data.forEach( (object) => {
			let item = {};

			item.src = object.src;
			item.group = object.group;
			item.name = object.name;
			item.count = object.count;

			this.options.push(item);
		});
	}

	willUpdate(changedProperties) {
		if (changedProperties.has('data')) {
			this.generateOptions(); // (2) [{...}, {...}]
		}
	}

	render() {
		// <count-element></count-element>
		// <filter-element></filter-element>
		return html`
		<elect-element .selected=${this.selected}></elect-element>
		<option-element .options=${this.options}></option-element>
		`;
	}
}

customElements.define('body-element', BodyElement);
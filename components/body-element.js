import {LitElement, html, css} from 'lit';
import {CountElement} from './count-element/count-element.js';
import {ElectElement} from './elect-element/elect-element.js';
import {FilterElement} from './filter-element/filter-element.js';
import {OptionElement} from './option-element/option-element.js';


export class BodyElement extends LitElement {
	static properties = {
		data: { type: Array },
		count: { type: Number },
		options: { type: Array }
	}

	constructor() {
		super();
		this.data = [];
		this.options = [];
		
		this.addEventListener('click-add', () => {
			// do something to modify data.count...
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
		// <elect-element .count=${this.count}></elect-element>
		// <filter-element></filter-element>
		return html`
		<option-element .data=${this.options}></option-element>
		`;
	}
}

customElements.define('body-element', BodyElement);
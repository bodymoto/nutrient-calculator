import {LitElement, html, css} from 'lit';
import {CountElement} from './count-element/count-element.js';
import {ElectElement} from './elect-element/elect-element.js';
import {FilterElement} from './filter-element/filter-element.js';
import {OptionElement} from './option-element/option-element.js';


export class BodyElement extends LitElement {
	static properties = {}

	constructor() {
		super();
	}

	static styles = css`
	  :host {
	  	display: flex;
	  	align-content: center;
	  	justify-content: center;
	  	flex-direction: column;
	  }
	`;

	render() {
		// <count-element></count-element>
		// <elect-element></elect-element>
		// <filter-element></filter-element>
		return html`
		<option-element></option-element>
		`;
	}
}

customElements.define('body-element', BodyElement);
import {LitElement, html, css} from 'lit';
import {TargetElement} from './target-element/target-element.js';

export class ElectElement extends LitElement {
	static properties = {
		selected: { type: Object }
	}

	constructor() {
		super();

		this.selected = {};
	}

	static styles = css`
		:host {
			margin: 20px;
			border: 1px solid black;
		}
	`;

	render() {
		return html`
			<target-element></target-element>
		`;
	}
}

customElements.define('elect-element', ElectElement);
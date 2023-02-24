import {LitElement, html, css} from 'lit';
import {TargetElement} from './target-element/target-element.js';

export class ElectElement extends LitElement {
	static properties = {
		electData: { type: Array },
		storage: { type: Array }
	}

	constructor() {
		super();

		this.electData = []; // (1) [{...}]
		this.storage = [];

		this.addEventListener('click-subtract', (event) => {
			// do something..
		});
	}

	static styles = css`
		:host {
			margin: 20px;
			border: 1px solid black;
			height: 200px;
		}
	`;

	willUpdate(changedProperties) {
		if (changedProperties.has('electData')) {
			if (!this.electData.length) {
				return;
			}

			if (!this.storage.includes(this.electData[0]))
				this.storage.push(this.electData[0]); // (2) [{...}, {...}]
				console.log(this.storage);
		}
	}

	render() {
		return html`
		<target-element></target-element>
		`;
	}
}

customElements.define('elect-element', ElectElement);
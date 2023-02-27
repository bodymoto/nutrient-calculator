import {LitElement, html, css} from 'lit';
import {TargetElement} from './target-element/target-element.js';

export class ElectElement extends LitElement {
	static properties = {
		electData: { type: Array },
		selectedData: { type: Array }
	}

	constructor() {
		super();

		this.electData = []; // (1) [{...}]
		this.selectedData = [];
	}

	static styles = css`
		:host {
			margin: 10px;
			border: 1px solid black;
			height: 60px;
		}
	`;

	willUpdate(changedProperties) {
		if (changedProperties.has('electData')) {
			if (!this.electData.length) {
				return;
			}

			if (!this.selectedData.includes(this.electData[0])) {
				this.selectedData.push(this.electData[0]);
				// (2) [{...}, {...}]
			};
		};
	}

	render() {
		return html`
		${
			this.selectedData.map((item) => {
				return html`
				<target-element name=${item.name} count=${item.count}></target-element>
				`
			})
		}
		`;
	}
}

customElements.define('elect-element', ElectElement);
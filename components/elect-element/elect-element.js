import {LitElement, html, css} from 'lit';
import {TargetElement} from './target-element/target-element.js';

export class ElectElement extends LitElement {
	static properties = {
		electData: { type: Array },
		selectedData: { type: Array }
	}

	constructor() {
		super();

		this.electData = [];
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

		};
	}

	render() {
		return html`
		<ul>
			${
				this.electData.map((item) => {
					return html`
						<target-element .element=${item}></target-element>
					`
				})
			}
		</ul>
		`;
	}
}

customElements.define('elect-element', ElectElement);
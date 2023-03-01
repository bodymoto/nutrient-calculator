import {LitElement, html, css} from 'lit';
import {TargetElement} from './target-element/target-element.js';

export class ElectElement extends LitElement {
	static properties = {
		data: { type: Array }
	}

	constructor() {
		super();

		this.data = [];
	}

	static styles = css`
		:host {
			margin: 10px;
			border: 1px solid black;
			height: 60px;
		}
	`;

	willUpdate(changedProperties) {
		if (changedProperties.has('data')) {
			if (!this.data.length) {
				return;
			}
		};
	}

	render() {
		return html`
			${
				this.data.map((item) => {
					if (item.count <= 0){
						return;
					}
					return html`
						<target-element .element=${item}></target-element>
					`
				})
			}
		`;
	}
}

customElements.define('elect-element', ElectElement);
import {LitElement, html, css} from 'lit';

export class ItemElement extends LitElement {
	static properties = {
		count: { type: Number }
	}

	constructor() {
		super();
		this.count = 1;
	}

	static styles = css`
		:host {
			position: relative;
			display: flex;
			align-content: center;
			justify-content: space-evenly;

			border: 1px solid black;
			margin: auto;
		}
		img {
			width: 82px;
		}
		p {
			position: absolute;
			font-size: 20px;
		}
	`;

	render() {
		return html`
			<img src="../components/option-element/img/banana.png" alt="" />
			<p>${this.count}</p>
		`;
	}
}

customElements.define('item-element', ItemElement);
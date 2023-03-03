import {LitElement, html, css} from 'lit';

export class AggregateElement extends LitElement {
	static styles = css`
		:host {
			margin: 10px;
			border: 1px solid black;
		}
	`;

	static properties = {
		data: { type: Array },
		totalcarbs: { type: String }
	}

	constructor() {
		super();
		this.data = [];
		this.totalcarbs = null;
	}

	// take totals and display them based on their counts

	button() {
		this.totalcarbs = null;
		this.data.forEach((object) => {
			let carbs = 0;
			carbs = (object.carbs * object.count);
			this.totalcarbs += carbs;
		});
	}

	render() {
		return html`
			<p>total carbs: ${this.totalcarbs}</p>

			<button @click=${this.button}>console totals</button>
		`;
	}
}

customElements.define('aggregate-element', AggregateElement);
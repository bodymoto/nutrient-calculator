import {LitElement, html, css} from 'lit';

export class AggregateElement extends LitElement {
	static properties = {
		totals: { type: Array },
		totalcarbs: { type: String }
	}

	constructor() {
		super();

		this.totals = [];
		this.totalcarbs = null;
	}

	static styles = css`
		:host {
			margin: 10px;
			border: 1px solid black;
		}
	`;

	button() {
		console.log(this.totals);
		this.totalcarbs = null;
		this.totals.forEach((object) => {
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
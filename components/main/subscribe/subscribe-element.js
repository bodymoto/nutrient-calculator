import {LitElement, html, css} from 'lit';

export class SubscribeElement extends LitElement {
	static styles = css``;

	constructor() {
		super();
	}

	// take user input and append/save to an existing file

	render() {
		return html`
			<p>SUBSCRIBE ELEMENT</p>
		`;
	}
}

customElements.define('subscribe-element', SubscribeElement);
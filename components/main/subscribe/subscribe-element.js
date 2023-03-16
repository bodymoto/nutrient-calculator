import {LitElement, html, css} from 'lit';

export class SubscribeElement extends LitElement {
	static styles = css``;

	constructor() {
		super();
	}

	// take user input and append/save to an existing file

	render() {
		return html`
			<h3>BodyBoon Progress List</h3>
			<p>Stay in touch to changes...</p>
			<form>
				<fieldset>
					<legend>Email Subscription</legend>
					<p>
						<input type="email" name="email" placeholder="Type your email..." />
						<button type="submit" tabindex="0">Subscribe</button>
					</p>
				</fieldset>
			</form>
		`;
	}
}

customElements.define('subscribe-element', SubscribeElement);
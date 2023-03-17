import {LitElement, html, css} from 'lit';

export class SocialElement extends LitElement {
	static styles = css`
		* {
			margin: 0;
			padding: 0;
			border-sizing: border-box;
		}

		:host {
			margin: 5px;
			height: 400px;
			border: 1px solid black;
		}
	`;

	constructor() {
		super();
	}

	render() {
		return html`
			<p>A special message to everyone who made it here. We don't know how, but you did it. You are the first to spelunk this phat dieting tech. We want to do so much more than what you see here today, but we need your help to survive! Follow us, tell us what's working, what's missing, and what's up...</p>

			<p>Were on Reddit</p>
			<img width="78" height="78" src="../../img/reddit-circle-onwhite.svg" alt="reddit logo" />

			<p>Follow on Twitter</p>
			<img width="52" height="52" src="../../img/twitter-logo-blue.svg" alt="twitter logo" />

			<p>Send a friendly email:</p>
		`;
	}
}

customElements.define('social-element', SocialElement);
import {LitElement, html, css} from 'lit';

export class SocialElement extends LitElement {
	static styles = css``;

	constructor() {
		super();
	}

	render() {
		return html`
			<p>SOCIAL ELEMENT</p>
		`;
	}
}

customElements.define('social-element', SocialElement);
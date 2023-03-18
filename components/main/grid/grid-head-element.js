import {LitElement, html, css} from 'lit';

export class GridHeadElement extends LitElement {
	static styles = css`
		* {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

	  p {
	  	background-color: #3e3e42;
	  	clip-path: polygon(97% 0, 100% 50%, 97% 100%, 0 100%, 0 0);
	  	color: #fff;
	  	font-size: 14px;
	  	height: 100%;
	  	padding: 5px 15px;
	  	margin-right: 30px;
	  	margin-bottom: 5px;
	  	letter-spacing: 1px;
	  }

	  @media screen and (min-width: 768px) {
	  	p {
		  	clip-path: polygon(98% 0, 100% 50%, 98% 100%, 0 100%, 0 0);
		  	font-size: 18px;
		  	padding: 5px 6%;
		  }
	  }
	`;

	constructor() {
		super();
	}

	render() {
		return html`
			<p>Select your foods:</p>
		`;
	}
}

customElements.define('grid-head-element', GridHeadElement);
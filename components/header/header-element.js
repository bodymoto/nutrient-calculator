import {LitElement, html, css} from 'lit';

export class HeaderElement extends LitElement {
	static styles = css`
		* {
			margin: 0;
			padding: 0;
			box-sizing: border-box;
		}

		.title {
			color: #3e3e42;
			font-size: 32px;
			font-family: Marker Felt, sans-serif;
			margin: 30px 0 0 15px;
			padding: 0;
			letter-spacing: 0;
		}

		.intro {
			display: flex;
			flex-direction: column;
			justify-content: center;
			background-color: #3e3e42;
			color: white;
			height: 380px;
			margin: 10px;
			padding: 10px;
			clip-path: polygon(0 0, 80% 0, 100% 20%, 100% 100%, 20% 100%, 0 80%);
		}

		h1 {
			text-transform: uppercase;
			padding: 0 40px 20px 0;
			letter-spacing: 1px;
			line-height: 30px;
		}

		p {
			font-size: 17px;
			letter-spacing: 0.5px;
			padding: 0 90px 20px 0;
		}

		span:nth-child(1) { color: #96ceb4 }
		span:nth-child(2) { color: #ff6f69 }
		span:nth-child(3) { color: #ffcc5c }
		span:nth-child(4) { color: #96ceb4 }
	`;

	static properties = {}

	constructor() {
		super();
	}

	render() {
		return html`
		<header>
			<h1 class="title">bodyboon</h1>
			<div class="intro">
				<h1><span>Calculate</span> your meals <span>total</span> <span>nutritional</span> value<span>.</span></h1>
				<p>Total carbohydrates, proteins, net carbs, cholesterol, vitamin c, calcium, iron, and more.</p>
			</div>
		</header>
		`;
	}
}

customElements.define('header-element', HeaderElement);
import {LitElement, html, css} from 'lit';

export class HeaderElement extends LitElement {
	static styles = css`
		* {
			margin: 0;
			padding: 0;
			box-sizing: border-box;
		}

		.title {
			text-transform: lowercase;
			color: #3e3e42;
			font-size: 32px;
			font-family: Geneva, sans-serif;
			margin: 30px 0 0 15px;
			padding: 0;
			letter-spacing: -1.1px;
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
			background: url(../../img/man-jumping-yogendra-singh-pexels.jpg) no-repeat;
			background-size: cover;
			box-shadow: inset 160px 120px 300px rgba(62, 62, 66, 0.8), inset -120px -160px 300px rgba(62, 62, 66, 0.8);
			clip-path: polygon(0 0, 80% 0, 100% 20%, 100% 100%, 20% 100%, 0 80%);
		}

		h1 {
			text-transform: uppercase;
			padding: 0 80px 20px 0;
			letter-spacing: 1px;
			line-height: 30px;
		}

		p {
			font-size: 17px;
			letter-spacing: 0.5px;
			padding: 0 120px 20px 0;
		}

		span:nth-child(1) { color: #96ceb4 }
		span:nth-child(2) { color: #ff6f69 }
		span:nth-child(3) { color: #ffcc5c }
		span:nth-child(4) { color: #96ceb4 }

		@media screen and (min-width: 768px) {
			h1 {
				font-size: 54px;
				line-height: 46px;
				padding: 0 240px 20px 0;
			}
			.title {
				font-size: 36px;
				margin: 30px 0 -12px 20px;
			}
			.intro {
				height: 450px;
				margin: 20px;
				padding: 20px 6%;
				background: url(../../img/man-jumping-yogendra-singh-pexels.jpg) no-repeat;
				background-position: bottom 30% right 60%;
				box-shadow: inset 250px 190px 300px rgba(62, 62, 66, 0.8), inset -190px -250px 300px rgba(62, 62, 66, 0.8);
				clip-path: polygon(0 0, 90% 0, 100% 10%, 100% 100%, 10% 100%, 0 90%);
			}
			p {
				font-size: 22px;
				letter-spacing: 0.5px;
				padding: 0 395px 20px 0;
				line-height: 22px;
			}
		}

		@media screen and (min-width: 1024px) {
			.intro {
				height: 600px;
				padding: 20px 16%;
				background: url(../../img/pexels-emiliano-arano.jpg) no-repeat;
				background-position: left 20% bottom 5%;
				clip-path: polygon(0 0, 90% 0, 100% 15%, 100% 100%, 10% 100%, 0 85%);
			}
		}

		@media screen and (min-width: 1280px) {
			.intro {
				padding: 20px 22%;
			}
		}
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
				<h1><span>Calculate</span> your meals <span>total</span> <span>nutritional value</span><span>.</span></h1>
				<p>Total carbohydrates, proteins, net carbs, cholesterol, vitamin c, calcium, iron, & more!</p>
			</div>
		</header>
		`;
	}
}

customElements.define('header-element', HeaderElement);
import {LitElement, html, css} from 'lit';

export class FooterElement extends LitElement {
	static styles = css`
		* {
			margin: 0;
			padding: 0;
			border-sizing: border-box;
		}

		footer {
			height: 400px;
			background-color: #2d2d30;
			color: #fff;
		}

		h4 {
			font-size: 32px;
			font-family: Geneva, sans-serif;
			letter-spacing: -1.1px;
			padding: 15px;
			padding-bottom: 0;
		}

		p {
			padding: 0 15px;
		}

		.contact {
			display: flex;
			flex-direction: column;
			gap: 10px;
			margin: 20px 0;
		}

		.social {
			display: flex;
			margin-top: 0;
		}

		img:hover {
			animation-duration: 0.7s;
			animation-name: jump;
		}

		img:active {
			filter: brightness(140%);
		}

		@keyframes jump {
			25% {transform: translateY(-5px);}
			50% {transform: translateY(0);}
			75% {transform: translateY(-3px);}
		}

		span:nth-child(1) { color: #96ceb4 }
		span:nth-child(2) { color: #ff6f69 }
		span:nth-child(3) { color: #ffcc5c }
		span:nth-child(4) { color: #96ceb4 }

		@media screen and (min-width: 768px) {
			footer {
				padding: 10%;
			}
		}

		@media screen and (min-width: 1280px) {
			footer {
				height: 200px;
				padding: 5% 10%;
			}
		}
	`;

	constructor() {
		super();
	}

	render() {
		return html`
		<footer>
			<h4>bodyboon</h4>
			<p><span>Calculate</span> your meals <span>total</span> <span>nutritional value</span><span>.</span></p>
			<p>&copy;2023</p>

			<div class="contact">
				<p>feedback@bodyboon.com</p>
				<div class="social">
					<a href="https://www.reddit.com/r/bodyboon/" target="_blank"><img width="52" height="52" style="margin: -20px 0" src="../../img/reddit-circle-onwhite.svg" alt="reddit logo" /></a>
					<a href="https://twitter.com/_bodyboon" target="_blank"><img width="28" height="28" style="margin: -5px 0" src="../../img/twitter-logo-blue.svg" alt="twitter logo" /></a>
				</div>
			</div>
		</footer>
		`;
	}
}

customElements.define('footer-element', FooterElement);
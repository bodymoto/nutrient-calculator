import {LitElement, html, css} from 'lit';

export class SocialElement extends LitElement {
	static styles = css`
		* {
			border-sizing: border-box;
			margin: 0;
			padding: 0;
		}

		:host {
			margin: 120px 20px;
			padding: 70px 0 80px 0;
			min-height: 400px;
			background-color: #FAF9F6;
			border: 1px solid black;
		}

		h3 {
			font-size: 36px;
			padding: 10px 30px 0 40px;
			text-transform: uppercase;
			line-height: 30px;
		}

		.grid {
			display: grid;
			grid-template-columns: 1fr;
			grid-template-rows: repeat(3, 1fr);
			margin: 35px;
			color: #2d2d30;
		}

		.flex {
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding-bottom: 20px;
			font-size: 18px;
		}

		.sub-text {
			display: flex;
			align-items: center;
			font-size: 13px;
			font-style: italic;
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

		.email {
			margin: -12px;
			font-size: 12px;
			font-weight: 700;
		}

		hr {
			width: 30px;
			margin-right: 5px;
		}

		span:nth-child(1) { color: #ff6f69 }
		span:nth-child(2) { color: #96ceb4 }
		span:nth-child(3) { color: #ffcc5c }

		@media screen and (min-width: 768px) {
			:host {
				margin: 15%;
				min-height: 400px;
			}
			h3 {
				font-size: 64px;
				padding-left: 25%;
				line-height: 50px;
			}
			.grid {
				padding: 30px 15% 0 15%;;
			}
		}

		@media screen and (min-width: 1280px) {
			.grid {
				padding: 30px 25% 0 25%;;
			}
		}
	`;

	constructor() {
		super();
	}

	render() {
		return html`
			<h3>
				<span>spread<br/></span>
				<span>the<br/></span>
				<span>word</span>
			</h3>

			<div class="grid">
				<div class="flex">
					<div>
						<p>Join us on Reddit</p>
						<div class="sub-text">
							<hr/>
							<p>let us hear your story</p>
						</div>
					</div>
					<a href="https://www.reddit.com/r/bodyboon/" target="_blank"><img width="78" height="78" style="margin: -20px 0" src="../../img/reddit-circle-onwhite.svg" alt="reddit logo" /></a>
				</div>
				<div class="flex">
					<div>
						<p>Follow us on Twitter</p>
						<div class="sub-text">
							<hr/>
							<p>receive the latest</p>
						</div>
					</div>
					<a href="https://twitter.com/_bodyboon" target="_blank"><img width="48" height="48" style="margin: 0 16px" src="../../img/twitter-logo-blue.svg" alt="twitter logo" /></a>
					</div>
				<div class="flex">
					<div>
						<p>Email us</p>
							<div class="sub-text">
								<hr/>
								<p>have an idea?</p>
							</div>
					</div>
					<div class="email">
						<p>feedback@<br/>bodyboon.com</p>
					</div>
				</div>
			</div>
		`;
	}
}

customElements.define('social-element', SocialElement);

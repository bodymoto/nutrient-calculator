import {LitElement, html, css} from 'lit';

export class AboutElement extends LitElement {
	static styles = css`
		* {
			margin: 0;
			padding: 0;
			border-sizing: border-box;
		}

		:host {
			margin: 50px 20px;
			padding: 20px;
			min-height: 300px;
			border: 1px solid black;
			background-color: #FAF9F6;
		}

		p {
			font-size: 14px;
			letter-spacing: 0.5px;
			line-height: 16px;
		}
	`;

	constructor() {
		super();
	}

	render() {
		return html`
			<p>&emsp;Our mission is to empower everyone to diet sustainably by calculating daily in-take. Our goal is to prevent long-term health risks associated with certain diets and encourage the replacement of supplements with actual food.</p>
			<br/>
			<p>&emsp;Dieting has many benefits, but some choices lead to high cholesterol or nutrient deficiency... depending on how we go about it.</p>
			<br/>
			<p>&emsp;We want precision tools that will enable us to accurately predict if we are consuming the recommended amount of vitamins, fats, fibers, etc.</p>
			<br/>
			<p>&emsp;Spread the word. Help Bodyboon get out into the world and into the hands of dieter's like us!</p>
		`;
	}
}

customElements.define('about-element', AboutElement);
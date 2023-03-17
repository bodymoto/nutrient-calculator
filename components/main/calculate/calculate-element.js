import {LitElement, html, css} from 'lit';

export class CalculateElement extends LitElement {
	static styles = css`
		* {
			padding: 0;
			border-sizing: border-box;
		}

		:host {
			margin: 5px;
			background-color: #96ceb4;
		}

		.button {
			display: flex;
			align-content: center;
			justify-content: center;
		}

		button {
			text-transform: uppercase;
			cursor: pointer;
			user-select: none;
			font-family: Trebuchet MS;
			font-size: 20px;
			font-weight: 700;
			padding: 12px 15px;
			margin: 50px 45px 15px 45px;
			border: none;
			box-shadow: -2px 2px 1px black;
			border-radius: 10px;
			background: #ffcc5c;
			transition-duration: 300ms;
		}

		button:active {
			filter: brightness(140%);
			box-shadow: none;
			transform: translate(-2px, 2px);
		}

		.row {
			display: flex;
			align-content: center;
			justify-content: center;
  		flex-direction: row;
  		flex-wrap: wrap;
  		width: 100%;
  		margin-bottom: 40px;
		}

		p {
			background-color: #2d2d30;
			margin: 5px 0;
			font-size: 17px;
			letter-spacing: 0.7px;
			color: #fff;
			font-family: Trebuchet MS, Tahoma, sans-serif;
			font-family: Georgia, serif;
			padding: 10px 20px 2px 5px;
			width: 100px;
		}
	`;

	static properties = {
		data: { type: Array },
		_count: { type: Number },
		_netCarbs: { type: Number},
		_water: { type: Number },
		_protein: { type: Number },
		_fat: { type: Number },
		_carbs: { type: Number },
		_fiber: { type: Number },
		_sugars: { type: Number },
		_calcium: { type: Number },
		_iron: { type: Number },
		_magnesium: { type: Number },
		_phosphorus: { type: Number },
		_potassium: { type: Number },
		_sodium: { type: Number },
		_vitaC: { type: Number },
		_vitaB6: { type: Number },
		_cholesterol: { type: Number }
	}

	constructor() {
		super();
		this.data = [];
		this._count = 0;
		this._netCarbs = 0;
		this._water = 0;
		this._protein = 0;
		this._fat = 0;
		this._carbs = 0;
		this._fiber = 0;
		this._sugars = 0;
		this._calcium = 0;
		this._iron = 0;
		this._magnesium = 0;
		this._phosphorus = 0;
		this._potassium = 0;
		this._sodium = 0;
		this._vitaC = 0;
		this._vitaB6 = 0;
		this._cholesterol = 0;
	}

	button() {
		this._count = 0;
		this._netCarbs = 0;
		this._water = 0;
		this._protein = 0;
		this._fat = 0;
		this._carbs = 0;
		this._fiber = 0;
		this._sugars = 0;
		this._calcium = 0;
		this._iron = 0;
		this._magnesium = 0;
		this._phosphorus = 0;
		this._potassium = 0;
		this._sodium = 0;
		this._vitaC = 0;
		this._vitaB6 = 0;
		this._cholesterol = 0;

		this.data.forEach((object) => {
			this._count = object.count;
			this._netCarbs += (object.carbs * this._count) - (object.fiber * this._count);
			this._water += (object.water * this._count);
		  this._protein += (object.protein * this._count);
		  this._fat += (object.fat * this._count);
		  this._carbs += (object.carbs * this._count);
		  this._fiber += (object.fiber * this._count);
		  this._sugars += (object.sugars * this._count);
		  this._calcium += (object.calcium * this._count);
		  this._iron += (object.iron * this._count);

		  // divide by 1000 to convert (mg) to (g)
		  this._magnesium += (object.magnesium * this._count) / 1000;
		  this._phosphorus += (object.phosphorus * this._count) / 1000;
		  this._potassium += (object.potassium * this._count) / 1000;
		  this._sodium += (object.sodium * this._count) / 1000;
		  this._vitaC += (object.vita_c * this._count) / 1000;
		  this._vitaB6 += (object.vita_b6 * this._count) / 1000;
		  this._cholesterol += (object.cholesterol * this._count / 1000);
		});
	}

	render() {
		return html`
			<div class="button">
				<button @click=${this.button}>calculate total nutritional value</button>
			</div>
			
			<div class="row">
				<div class="column">
					<p>Carbs:</p>
					<p>Net Carbs:</p>
					<p>Proteins:</p>
					<p>Cholesterol:</p>
					<p>Fats:</p>
					<p>Fiber:</p>
					<p>Sugars:</p>
					<p>Calcium:</p>
					<p>Iron:</p>
					<p>Magnesium:</p>
					<p>Phosphorus:</p>
					<p>Potassium:</p>
					<p>Sodium:</p>
					<p>Vitamin C:</p>
					<p>Vitamin B6:</p>
					<p>Water:</p>
				</div>

				<div class="column">
					<p>${this._carbs.toFixed(2)}g</p>
					<p>${this._netCarbs.toFixed(2)}g</p>
					<p>${this._protein.toFixed(2)}g</p>
					<p>${this._cholesterol.toFixed(2)}g</p>
					<p>${this._fat.toFixed(2)}g</p>
					<p>${this._fiber.toFixed(2)}g</p>
					<p>${this._sugars.toFixed(2)}g</p>
					<p>${this._calcium.toFixed(2)}g</p>
					<p>${this._iron.toFixed(2)}g</p>
					<p>${this._magnesium.toFixed(2)}g</p>
					<p>${this._phosphorus.toFixed(2)}g</p>
					<p>${this._potassium.toFixed(2)}g</p>
					<p>${this._sodium.toFixed(2)}g</p>
					<p>${this._vitaC.toFixed(2)}g</p>
					<p>${this._vitaB6.toFixed(2)}g</p>
					<p>${this._water.toFixed(2)}g</p>
				</div>
			</div>
		`;
	}
}

customElements.define('calculate-element', CalculateElement);
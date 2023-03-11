import {LitElement, html, css} from 'lit';

export class AggregateElement extends LitElement {
	static styles = css`
		* {
			margin: 0;
			padding: 0;
			border-sizing: border-box;
		}

		:host {
			margin: 10px;
			border: 1px solid black;
		}

		.row {
			display: flex;
  		flex-direction: row;
  		flex-wrap: wrap;
  		width: 100%;
		}

		.column {
			display: flex;
  		flex-direction: column;
  		flex-basis: 100%;
  		flex: 1;
  		margin: auto;
		}

		p {
			font-size: 16px;
			font-family: Trebuchet MS;
			border: 1px solid black;
			padding: 5px 5px 0 5px;
			margin: 5px auto;
			width: 140px;
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
			font-weight: 700;
			letter-spacing: 1px;
			padding: 10px 32px;
			margin: 5px;
			border-radius: 10px;
			background: linear-gradient(0.55turn, 
				rgba(150, 206, 180, 0.8), 
				rgba(255, 238, 173, 0.8), 
				rgba(255, 204, 92, 0.8), 
				rgba(255, 111, 105, 0.8));
			transition-duration: 300ms;
		}

		button:active {
			filter: brightness(140%);
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
				</div>

				<div class="column">
					<p>${this._carbs.toFixed(1)}g</p>
					<p>${this._netCarbs.toFixed(1)}g</p>
					<p>${this._protein.toFixed(1)}g</p>
					<p>${this._cholesterol.toFixed(1)}g</p>
					<p>${this._fat.toFixed(1)}g</p>
					<p>${this._fiber.toFixed(1)}g</p>
					<p>${this._sugars.toFixed(1)}g</p>
					<p>${this._calcium.toFixed(1)}g</p>
				</div>

				<div class="column">
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
					<p>${this._iron.toFixed(1)}g</p>
					<p>${this._magnesium.toFixed(1)}g</p>
					<p>${this._phosphorus.toFixed(1)}g</p>
					<p>${this._potassium.toFixed(1)}g</p>
					<p>${this._sodium.toFixed(1)}g</p>
					<p>${this._vitaC.toFixed(1)}g</p>
					<p>${this._vitaB6.toFixed(1)}g</p>
					<p>${this._water.toFixed(1)}g</p>
				</div>
			</div>

			<div class="button">
				<button @click=${this.button}>reveal nutritional value</button>
			</div>
		`;
	}
}

customElements.define('aggregate-element', AggregateElement);
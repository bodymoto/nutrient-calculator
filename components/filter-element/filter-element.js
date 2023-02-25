import {LitElement, html, css} from 'lit';

export class FilterElement extends LitElement {
	static properties = {
		filterData: { type: Array }
	}

	constructor() {
		super();

		this.filterData = [];
		this.input = [];
		this.search = '';

		this.addEventListener('input', (event) => {
			if (event.data == null) {
				this.input.pop();
			} else {
				this.input.push(event.data);
			}
			this.search = this.input.join('');

			let names = [];
			this.filterData.map((object) => {
				names.push(object.name);
			});

			names.map((name) => {
				this.search.split(" ").map((word) => {
					if(name.indexOf(word) != -1) {
						// name = banana
						let bozo = this.filterData.filter((object) => {
							object.name !== name;
						})
						console.log(bozo);
						this.filterData = [...bozo];
					}
				})
			})

		});
	}

	static styles = css`
		:host {
			margin: 20px;
			border: 1px solid black;
		}
	`;

	willUpdate(changedProperties) {
		console.log(changedProperties);
	}

	render() {
		return html`
			<input autocomplete="off" type="search" />
			<ul class="test">
				${
					this.filterData.map((object) => {
						return html`
						<li>${object.name}</li>
						`
					})
				}
			</ul>
		`;
	}
}

customElements.define('filter-element', FilterElement);
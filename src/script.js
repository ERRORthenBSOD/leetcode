const template = document.createElement('template');
template.innerHTML = `
    <div>
        <slot name='title'>Default text</slot>
        <h3>This is custom one template!</h3>
    </div>
`;

customElements.define(
	'custom-azz',
	class Azz extends HTMLElement {
		constructor() {
			super();
			const shadowRoot = this.attachShadow({ mode: 'closed' });
			// const div = document.createElement('div');
			// div.textContent = 'This is custom one!';
			// shadowRoot.append(div);
			const clone = template.content.cloneNode(true);
			shadowRoot.append(clone);
		}
	},
);

customElements.define(
	'person-details',
	class extends HTMLElement {
		constructor() {
			super();

			const template = document.getElementById('person-template');
			const templateContent = template.content;

			const shadowRoot = this.attachShadow({ mode: 'open' });

			const style = document.createElement('style');
			style.textContent = `
        div { padding: 10px; border: 1px solid gray; width: 200px; margin: 10px; }
        h2 { margin: 0 0 10px; }
        ul { margin: 0; }
        p { margin: 10px 0; }
        ::slotted(*) { color: gray; font-family: sans-serif; }
      `;

			shadowRoot.appendChild(style);
			shadowRoot.appendChild(templateContent.cloneNode(true));
		}
	},
);

function submitFunc(event) {
	event.preventDefault();
	console.log(111, event.defaultPrevented);
	console.log(event);
}

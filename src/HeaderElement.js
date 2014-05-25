export class HeaderElement extends HTMLElement {
	// Fires when an instance of the HeaderPrototype is created
	createdCallback() {
		this.textContent = "I'm a header!";
	};

	// Fires when an instance was inserted into the document
	attachedCallback() {};

	// Fires when an instance was removed from the document
	detachedCallback() {};

	// Fires when an attribute was added, removed, or updated
	attributeChangedCallback(attr, oldVal, newVal) {};

	foo() {
		console.log("foo() called");
	};
}
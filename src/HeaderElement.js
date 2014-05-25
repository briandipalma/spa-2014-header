// Creates an object based in the HTML Element prototype
var HeaderPrototype = Object.create(HTMLElement.prototype);

// Fires when an instance of the HeaderPrototype is created
HeaderPrototype.createdCallback = function() {
	this.textContent = "I'm a header!";
};

// Fires when an instance was inserted into the document
HeaderPrototype.attachedCallback = function() {};

// Fires when an instance was removed from the document
HeaderPrototype.detachedCallback = function() {};

// Fires when an attribute was added, removed, or updated
HeaderPrototype.attributeChangedCallback = function(attr, oldVal, newVal) {};

HeaderPrototype.foo = function() {
	console.log("foo() called");
};

export default { prototype: HeaderPrototype };
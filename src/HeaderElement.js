export class HeaderElement extends HTMLElement {
	// Fires when an instance of the HeaderPrototype is created
	createdCallback() {
		this.innerHTML = "<div class='error-message'>Login failed, please provide correct login details.</div>\
							<label for='username'>Username</label>\
							<input type='text' id='username' name='username' />\
							<label for='password'>Password</label>\
							<input type='text' id='password' name='password' />\
							<button name='login'>Log in</button>\
							<button name='logout'>Log out</button>";

		console.info("created header");
	};

	// Fires when an instance was inserted into the document
	attachedCallback() {
		console.info("attached header");
	};

	// Fires when an instance was removed from the document
	detachedCallback() {};

	// Fires when an attribute was added, removed, or updated
	attributeChangedCallback(attr, oldVal, newVal) {};

	foo() {
		console.log("foo() called");
	};
}

//The view should have access to the Dispatcher and nothing else. It dispatches Actions.

//Will have a "login", "logout" button

//The datastore will have to know
//if we are logged in or not,
//if a login attempt failed,
//if a login error message should be displayed or not,
//how many unread messages there are (maybe).
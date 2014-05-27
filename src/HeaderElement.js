import {HeaderStore} from "./HeaderStore";
import HeaderActions from "./HeaderActions";

import "../css/index.css!";
import headerTemplate from "../template/header.text!";

export class HeaderElement extends HTMLElement {
	// Fires when an instance of the HeaderElement is created
	createdCallback() {
		this.innerHTML = headerTemplate;
	}

	// Fires when an instance was inserted into the document
	attachedCallback() {
		var usernameInput = this.querySelector("#username");
		var passwordInput = this.querySelector("#password");
		var loginButton = this.querySelector("button[name='login']");
		var logoutButton = this.querySelector("button[name='logout']");

		loginButton.addEventListener("click", () => this._onLoginClicked());
		logoutButton.addEventListener("click", () => this._onLogoutClicked());
		usernameInput.addEventListener("keydown", (keyboardEvent) => this._inputKeydownListener(keyboardEvent));
		passwordInput.addEventListener("keydown", (keyboardEvent) => this._inputKeydownListener(keyboardEvent));

		HeaderStore.addChangeListener(this.onHeaderStoreChange);
	}

	// Fires when an instance was removed from the document
	detachedCallback() {}

	// Fires when an attribute was added, removed, or updated
	attributeChangedCallback(attr, oldVal, newVal) {}

	render() {
		var loginState = this.props.logginState;
		var loginErrorState = this.props.loginErrorState;

		this.className = loginState + " " + errorState;
	}

	onHeaderStoreChange() {
		this.props = HeaderStore.getState();
		this.render();
	}

	_inputKeydownListener({key: key, keyIdentifier: keyId}) {
		if (key === "Enter" || keyId === "Enter") {
			this._onLoginClicked();
		}
	}

	_onLoginClicked() {
		console.info("login");

		var username = this.querySelector("#username").value;
		var password = this.querySelector("#password").value;

		HeaderActions.login(username, password);
	}

	_onLogoutClicked() {
		console.info("logout");

		HeaderActions.logout();
	}
}

//The controller-views call their own render() method via setState() or forceUpdate(),
// updating themselves and all of their children.

//The dispatcher is the central hub that manages all data flow in a Flux application.
//It is essentially a registry of callbacks into the stores.
//Each store registers itself and provides a callback.
//When the dispatcher responds to an action, all stores in the
//application are sent the data payload provided by the action via the callbacks in the registry.

//In Flux, the Dispatcher is a singleton that directs the flow of data and ensures that updates do not cascade.
//As an application grows, the Dispatcher becomes more vital, as it can also manage dependencies between stores by invoking
//the registered callbacks in a specific order.

//The view should have access to the Dispatcher and nothing else. It dispatches Actions.

//Will have a "login", "logout" button

//The datastore will have to know
//if we are logged in or not,
//if a login error message should be displayed or not,
//if we are attempting to login,
//how many unread messages there are (maybe).
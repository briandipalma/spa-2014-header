import {createStoreAndActions} from 'flux-es6';

import HeaderStore from './HeaderStore';
import HeaderActions from './HeaderActions';

import '../style/index.css!';
import headerTemplate from '../template/header.text!';

export class HeaderElement extends HTMLElement {
	// Fires when an instance of the HeaderElement is created
	createdCallback() {
		var [headerStore, headerActions] = createStoreAndActions(HeaderStore, HeaderActions);

		this.innerHTML = headerTemplate;
		this.headerStore = headerStore;
		this.headerActions = headerActions;
	}

	// Fires when the instance is inserted into the document
	attachedCallback() {
		var usernameInput = this.querySelector('#username');
		var passwordInput = this.querySelector('#password');
		var loginButton = this.querySelector('button[name="login"]');
		var logoutButton = this.querySelector('button[name="logout"]');

		loginButton.addEventListener('click', () => this._onLoginClicked());
		logoutButton.addEventListener('click', () => this._onLogoutClicked());
		usernameInput.addEventListener('keydown', (keyboardEvent) => this._inputKeydownListener(keyboardEvent));
		passwordInput.addEventListener('keydown', (keyboardEvent) => this._inputKeydownListener(keyboardEvent));

		this.headerStore.addChangeListenerAndNotify(this.headerStoreChanged, this);
	}

	get headerDispatcher() {
		return this.headerActions.headerDispatcher;
	}

	render() {
		var loginState = this.props.loginState;
		var loginErrorState = this.props.loginErrorState;

		this.className = loginState + ' ' + loginErrorState;
	}

	headerStoreChanged() {
		this.props = this.headerStore.getState();
		this.render();
	}

	_inputKeydownListener({key: key, keyIdentifier: keyId}) {
		if (key === 'Enter' || keyId === 'Enter') {
			this._onLoginClicked();
		}
	}

	_onLoginClicked() {
		var username = this.querySelector('#username').value;
		var password = this.querySelector('#password').value;

		this.headerActions.login(username, password);
	}

	_onLogoutClicked() {
		this.headerActions.logout();
	}
}
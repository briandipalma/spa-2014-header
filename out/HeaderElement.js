"use strict";
Object.defineProperties(exports, {
  HeaderElement: {get: function() {
      return HeaderElement;
    }},
  __esModule: {value: true}
});
require('../css/index.css!');
var HeaderElement = function HeaderElement() {
  $traceurRuntime.defaultSuperCall(this, $HeaderElement.prototype, arguments);
};
var $HeaderElement = HeaderElement;
($traceurRuntime.createClass)(HeaderElement, {
  createdCallback: function() {
    this.innerHTML = "<div class='error-message'>Login failed, please provide correct login details.</div>\
							<label for='username'>Username</label>\
							<input type='text' id='username' name='username' />\
							<label for='password'>Password</label>\
							<input type='text' id='password' name='password' />\
							<button name='login'>Log in</button>\
							<button name='logout'>Log out</button>";
  },
  attachedCallback: function() {
    var $__0 = this;
    var usernameInput = this.querySelector("#username");
    var passwordInput = this.querySelector("#password");
    var loginButton = this.querySelector("button[name='login']");
    var logoutButton = this.querySelector("button[name='logout']");
    loginButton.addEventListener("click", (function() {
      return $__0._onLoginClicked();
    }));
    logoutButton.addEventListener("click", (function() {
      return $__0._onLogoutClicked();
    }));
    usernameInput.addEventListener("keydown", (function(keyboardEvent) {
      return $__0._inputKeydownListener(keyboardEvent);
    }));
    passwordInput.addEventListener("keydown", (function(keyboardEvent) {
      return $__0._inputKeydownListener(keyboardEvent);
    }));
  },
  detachedCallback: function() {},
  attributeChangedCallback: function(attr, oldVal, newVal) {},
  render: function() {
    var errorState = this.props.errorInLogin ? " error" : "";
    var loginState = this.props.loggedIn ? "logged-in" : "logged-out";
    this.className = loginState + " " + errorState;
  },
  _inputKeydownListener: function($__2) {
    var key = $__2.key,
        keyId = $__2.keyIdentifier;
    if (key === "Enter" || keyId === "Enter") {
      this._onLoginClicked();
    }
  },
  _onLoginClicked: function() {
    console.info("login");
  },
  _onLogoutClicked: function() {
    console.info("logout");
  }
}, {}, HTMLElement);

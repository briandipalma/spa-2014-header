"use strict";
Object.defineProperties(exports, {
  HeaderElement: {get: function() {
      return HeaderElement;
    }},
  __esModule: {value: true}
});
var HeaderStore = $traceurRuntime.assertObject(require("./HeaderStore")).HeaderStore;
var HeaderActions = $traceurRuntime.assertObject(require("./HeaderActions")).default;
require("../css/index.css!");
var headerTemplate = $traceurRuntime.assertObject(require("../template/header.text!")).default;
var HeaderElement = function HeaderElement() {
  $traceurRuntime.defaultSuperCall(this, $HeaderElement.prototype, arguments);
};
var $HeaderElement = HeaderElement;
($traceurRuntime.createClass)(HeaderElement, {
  createdCallback: function() {
    this.innerHTML = headerTemplate;
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
    HeaderStore.addChangeListener(this.headerStoreChanged, this);
    this.headerStoreChanged();
  },
  detachedCallback: function() {},
  attributeChangedCallback: function(attr, oldVal, newVal) {},
  render: function() {
    var loginState = this.props.loginState;
    var loginErrorState = this.props.loginErrorState;
    this.className = loginState + " " + loginErrorState;
  },
  headerStoreChanged: function() {
    this.props = HeaderStore.getState();
    this.render();
  },
  _inputKeydownListener: function($__2) {
    var key = $__2.key,
        keyId = $__2.keyIdentifier;
    if (key === "Enter" || keyId === "Enter") {
      this._onLoginClicked();
    }
  },
  _onLoginClicked: function() {
    var username = this.querySelector("#username").value;
    var password = this.querySelector("#password").value;
    HeaderActions.login(username, password);
  },
  _onLogoutClicked: function() {
    HeaderActions.logout();
  }
}, {}, HTMLElement);

"use strict";
Object.defineProperties(exports, {
  HeaderElement: {get: function() {
      return HeaderElement;
    }},
  __esModule: {value: true}
});
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
    console.info("created header");
  },
  attachedCallback: function() {
    console.info("attached header");
  },
  detachedCallback: function() {},
  attributeChangedCallback: function(attr, oldVal, newVal) {},
  foo: function() {
    console.log("foo() called");
  }
}, {}, HTMLElement);

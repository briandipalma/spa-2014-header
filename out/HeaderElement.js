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
    this.textContent = "I'm a header!";
  },
  attachedCallback: function() {},
  detachedCallback: function() {},
  attributeChangedCallback: function(attr, oldVal, newVal) {},
  foo: function() {
    console.log("foo() called");
  }
}, {}, HTMLElement);

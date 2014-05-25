System.register([], function($__0) {
  "use strict";
  var HeaderElement;
  return {
    exports: {
      get HeaderElement() {
        return HeaderElement;
      },
      set HeaderElement(value) {
        HeaderElement = value;
      }
    },
    execute: function() {
      HeaderElement = (function($__super) {
        var HeaderElement = function HeaderElement() {
          $traceurRuntime.defaultSuperCall(this, HeaderElement.prototype, arguments);
        };
        return ($traceurRuntime.createClass)(HeaderElement, {
          createdCallback: function() {
            this.textContent = "I'm a header!";
          },
          attachedCallback: function() {},
          detachedCallback: function() {},
          attributeChangedCallback: function(attr, oldVal, newVal) {},
          foo: function() {
            console.log("foo() called");
          }
        }, {}, $__super);
      }(HTMLElement));
    }
  };
});

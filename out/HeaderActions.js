"use strict";
Object.defineProperties(exports, {
  default: {get: function() {
      return $__default;
    }},
  __esModule: {value: true}
});
var HeaderConstants = $traceurRuntime.assertObject(require("./HeaderConstants")).default;
var HeaderDispatcher = $traceurRuntime.assertObject(require("./HeaderDispatcher")).default;
var $__default = {
  loggedIn: function() {
    HeaderDispatcher.handleServerAction({actionType: HeaderConstants.LOGGED_IN});
  },
  login: function(username, password) {
    HeaderDispatcher.handleViewAction({
      actionType: HeaderConstants.LOGGING_IN,
      username: username,
      password: password
    });
  },
  loggedOut: function() {
    HeaderDispatcher.handleServerAction({actionType: HeaderConstants.LOGGED_OUT});
  },
  logout: function() {
    HeaderDispatcher.handleViewAction({actionType: HeaderConstants.LOGGING_OUT});
  },
  loginError: function() {
    HeaderDispatcher.handleServerAction({actionType: HeaderConstants.LOGIN_ERROR});
  },
  loginErrorCleared: function() {
    HeaderDispatcher.handleViewAction({actionType: HeaderConstants.LOGIN_ERROR_CLEARED});
  }
};

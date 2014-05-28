"use strict";
Object.defineProperties(exports, {
  HeaderStore: {get: function() {
      return HeaderStore;
    }},
  __esModule: {value: true}
});
var Emitr = $traceurRuntime.assertObject(require("emitr")).default;
var HeaderConstants = $traceurRuntime.assertObject(require("./HeaderConstants")).default;
var HeaderDispatcher = $traceurRuntime.assertObject(require("./HeaderDispatcher")).default;
var CHANGE_EVENT = 'change';
var headerState = {
  loginState: "logged-out",
  loginErrorState: "no-error"
};
function setHeaderState(loginState, loginErrorState) {
  headerState.loginState = loginState;
  headerState.loginErrorState = loginErrorState;
}
var HeaderStore = Object.assign({
  getState: function() {
    return headerState;
  },
  handleDispatcherAction: function(payload) {
    var action = payload.action;
    switch (action.actionType) {
      case HeaderConstants.LOGGED_IN:
        setHeaderState("logged-in", "no-error");
        break;
      case HeaderConstants.LOGGING_IN:
        setHeaderState("logging-in", "no-error");
        break;
      case HeaderConstants.LOGGED_OUT:
        setHeaderState("logged-out", "no-error");
        break;
      case HeaderConstants.LOGGING_OUT:
        setHeaderState("logging-out", "no-error");
        break;
      case HeaderConstants.LOGIN_ERROR:
        setHeaderState("logged-out", "error");
        break;
      case HeaderConstants.LOGIN_ERROR_CLEARED:
        headerState.loginErrorState = "no-error";
        break;
      default:
        return true;
    }
    this.emitChange();
    return true;
  },
  emitChange: function() {
    this.trigger(CHANGE_EVENT);
  },
  addChangeListener: function(callback, context) {
    this.on(CHANGE_EVENT, callback, context);
  },
  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
}, Emitr.prototype);
HeaderDispatcher.register((function(payload) {
  return HeaderStore.handleDispatcherAction(payload);
}));

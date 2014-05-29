import FluxDispatcher from "flux-dispatcher";

import HeaderConstants from "./HeaderConstants";

export default {
    loggedIn() {
        FluxDispatcher.handleServerAction({
            actionType: HeaderConstants.LOGGED_IN
        });
    },

    login(username, password) {
        FluxDispatcher.handleViewAction({
            actionType: HeaderConstants.LOGGING_IN,
            username: username,
            password: password
        });
    },

    loggedOut() {
        FluxDispatcher.handleServerAction({
            actionType: HeaderConstants.LOGGED_OUT
        });
    },

    logout() {
        FluxDispatcher.handleViewAction({
            actionType: HeaderConstants.LOGGING_OUT
        });
    },

    loginError() {
        FluxDispatcher.handleServerAction({
            actionType: HeaderConstants.LOGIN_ERROR
        });
    },

    loginErrorCleared() {
        FluxDispatcher.handleViewAction({
            actionType: HeaderConstants.LOGIN_ERROR_CLEARED
        });
    }
};
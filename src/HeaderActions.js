import HeaderConstants from "./HeaderConstants";
import HeaderDispatcher from "./HeaderDispatcher";

export default {
    loggedIn() {
        HeaderDispatcher.handleViewAction({
            actionType: HeaderConstants.LOGGED_IN
        });
    },

    login(username, password) {
        HeaderDispatcher.handleViewAction({
            actionType: HeaderConstants.LOGGING_IN,
            username: username,
            password: password
        });
    },

    loggedOut() {
        HeaderDispatcher.handleViewAction({
            actionType: HeaderConstants.LOGGED_OUT
        });
    },

    logout() {
        HeaderDispatcher.handleViewAction({
            actionType: HeaderConstants.LOGGING_OUT
        });
    },

    loginError() {
        HeaderDispatcher.handleViewAction({
            actionType: HeaderConstants.LOGIN_ERROR
        });
    },

    loginErrorCleared() {
        HeaderDispatcher.handleViewAction({
            actionType: HeaderConstants.LOGIN_ERROR_CLEARED
        });
    }
};
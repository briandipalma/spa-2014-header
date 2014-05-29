import FluxDispatcher from "flux-dispatcher";

import HeaderStore from "./HeaderStore";
import HeaderActions from "./HeaderActions";

export function createStoreAndActions() {
    var headerStore = new HeaderStore();
    var headerDispatcher = new FluxDispatcher();
    var headerActions = new HeaderActions(headerDispatcher);
    
    headerDispatcher.register((payload) => headerStore.handleDispatcherAction(payload));

    return [headerStore, headerActions];
}

export {HeaderElement} from "./HeaderElement";
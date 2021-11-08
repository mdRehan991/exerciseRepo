import HomeStore from "./HomeStore";
import EditStore from "./EditStore";

class RootStore {
    constructor() {
        this.homeStore = new HomeStore();
        this.editStore = new EditStore();
    }
}

export default RootStore;
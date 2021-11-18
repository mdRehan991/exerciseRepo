import {observable, action, makeObservable} from 'mobx';

class EditStore {
  constructor() {
    makeObservable(this);
  }
  @observable editStoreState = {};

  @action saveItem(val) {
    this.editStoreState = val;
  }
}

export default EditStore;
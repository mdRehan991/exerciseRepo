import {observable, action, makeObservable} from 'mobx';

class HomeStore {
  constructor() {
    makeObservable(this);
  }
  @observable homeStoreState = [];

  @action saveApi(val) {
    this.homeStoreState = val;
  }

  @action updateApi(titleVal, idVal, index) {
    const id = idVal;
    const title = titleVal.updatedTitle;
    const body = titleVal.updatedBody;
    const arr = [...this.homeStoreState];

    arr.splice(index, 1, {id, title, body});

    this.homeStoreState = arr;
  }

  @action deleteApi(idVal) {
    const arr = [...this.homeStoreState];
    arr.splice(idVal, 1);

    this.homeStoreState = arr;
  }
}

export default HomeStore;

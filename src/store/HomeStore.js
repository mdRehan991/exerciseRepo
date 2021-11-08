import {observable, action, makeObservable} from 'mobx';

class HomeStore {
  constructor() {
    makeObservable(this);
  }
  @observable homeStoreState = [];

  @action saveApi(val) {
    this.homeStoreState = val;
  }

  @action updateApi(titleVal, idVal) {
    const id = idVal;
    const title = titleVal.updatedTitle;
    const body = titleVal.updatedBody;
    const arr = [...this.homeStoreState];

    arr.splice(id - 1, 1, {id, title, body});

    this.homeStoreState = arr;
  }

  @action deleteApi(idVal) {
    const index = this.homeStoreState.findIndex(item => item.id === idVal);
    const arr = [...this.homeStoreState];

    arr.splice(index, 1);

    this.homeStoreState = arr;
  }
}

export default HomeStore;

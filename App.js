import React, {Component} from 'react';
import {Provider} from 'mobx-react';
import RootStore from './src/store';
import StackNavigator from './src/navigator/StackNavigator';

class App extends Component {
  render() {
    const rootStore = new RootStore();
    return (
      <Provider homeStore={rootStore.homeStore} editStore={rootStore.editStore}>
        <StackNavigator />
      </Provider>
    );
  }
}

export default App;

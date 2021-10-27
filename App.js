import React from 'react';
import CounterApp from './src/screens/CounterApp';
import {Provider} from 'react-redux';
import store from './src/redux/store';

const App = () => {
  return (
    <Provider store={store}>
        <CounterApp />
    </Provider>
  );
};

export default App;
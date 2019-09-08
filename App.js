import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './src/reducers'
import Calculator from './src';


const AppStore = createStore(reducers);


export default function App() {
  return (
    <Provider store={AppStore} style={{flex: 1}}>
      <Calculator />
    </Provider>
  );
}
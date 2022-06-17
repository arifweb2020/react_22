/**
 * Main point of Application
 * Author: Arif
 */
import React from 'react';
import { Provider } from 'react-redux';
import AppRoutes from './routes/AppRoutes';
import store from './app/store'
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';


let persistor = persistStore(store);

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <AppRoutes />
      </PersistGate>
    </Provider>
  );
}

export default App;

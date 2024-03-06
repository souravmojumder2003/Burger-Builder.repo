import React from 'react';
import './App.css';
import Main from './Components/Main';

import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import { store } from './redux/store';
import ErrorBoundary from './Components/error/ErrorBoundary';

function App() {
  return (
    <div>
      <Provider store={store}>
        <BrowserRouter>
          <ErrorBoundary fallback={"something went wrong!"}>
            <Main />
          </ErrorBoundary>

        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;

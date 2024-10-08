import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ShopContextProvider from './Components/Context/ShopContext';

// redux start 
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux';
import { thunk } from 'redux-thunk'
import reducers from './redux/reducers'
const store = createStore(reducers, compose(applyMiddleware(thunk)));
// redux end


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store} >
        <ShopContextProvider>
            <App />
        </ShopContextProvider>
    </Provider>
);



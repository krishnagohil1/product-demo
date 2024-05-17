import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import ProductDetails from './features/products/ProductDetails';
import Login from './features/products/Login';

const PrivateRoute = ({children}) =>{
  const  autenticate = localStorage.getItem('token') ?? ''
  return autenticate ? children : <Navigate to={"/"}/>
}
const token= localStorage.getItem('token')
const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
              <Routes>
                    <Route  path='/' element={<Login/>}/>
                    <Route  path='/product' element={
                      <PrivateRoute>
                        <App />
                      </PrivateRoute>
                    }/>
                    <Route  path='/product/:productId' element={
                       <PrivateRoute>
                            <ProductDetails/>
                       </PrivateRoute>
                    }/>

                    <Route  path='*' element={<p>No Data Found 404</p>}/>
              </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

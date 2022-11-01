import React from 'react';
import ReactDOM from 'react-dom/client';
// import the browser router (the browser router is the generic router, it levergaes the URL to track the history of where the user is navigating through)
import { BrowserRouter } from 'react-router-dom';
import './index.scss';
import App from './App';
// import userprovider function from context (now we can access the context in the UserProvider)
import { UserProvider } from './contexts/user.context';
// import ProductsProvider function from context (now we can access the context in the ProductsProvider)
import { ProductsProvider } from './contexts/products.context';
import { CartProvider } from './contexts/cart.contex';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* make sure the browser router is the parent of the entier application, now we can access all the features in browser router  */}
    <BrowserRouter>
      <UserProvider>
        <ProductsProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </ProductsProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

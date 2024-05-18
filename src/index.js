import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './header';
import Productslist from './Products';
import reportWebVitals from './reportWebVitals';
import CartModal from "./modalcart";

function Root() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <React.StrictMode>
      <App setIsModalOpen={setIsModalOpen} />
      <CartModal  isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      <Productslist />
    </React.StrictMode>
  );
}

ReactDOM.render(<Root />, document.getElementById('root'));

reportWebVitals();

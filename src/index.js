import React,{ useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/header';
import Productslist from './components/Products';
import reportWebVitals from './reportWebVitals';
import CartModal from "./components/modalcart";
import { Provider } from 'react-redux';
import store from './components/store'

function Root() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
  
      <React.StrictMode>
         <Provider store={store}>
         <App setIsModalOpen={setIsModalOpen} />
        <CartModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
        <Productslist  />
        
        </Provider>
      </React.StrictMode>

  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<Root />);

reportWebVitals();

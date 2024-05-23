import { useSelector } from "react-redux";
import { FaCartShopping } from "react-icons/fa6";
import './App.css';

function App({ setIsModalOpen }) {
  const cart = useSelector((state) => state.cart);

  return (
    <div className="App">
      <header className="App-header flex items-center">
        <h1 className='m-4'>MYCART</h1>
        <div className="flex items-center ">
          <FaCartShopping className="text-gray-500 text-2xl" onClick={() => setIsModalOpen(true)} />
          {cart.cartcount !== 0 && (
            <h5 className="text-black ml-1 font-bold mb-4 text-sm bg-white px-2 rounded-full ">{cart.cartcount}</h5>

          )}
         
        </div>
      </header>
    </div>
  );
}

export default App;

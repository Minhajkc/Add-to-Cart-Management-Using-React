
import { FaCartShopping } from "react-icons/fa6";
import './App.css';


function App({setIsModalOpen}) {


  return (
    <div className="App">
      <header className="App-header flex items-center">
        <h1 className='m-4'>MYCART</h1>
        <div>
          <FaCartShopping className="text-gray-500 text-2xl" onClick={()=>setIsModalOpen(true)} />
        </div>
      </header>
    </div>
  );
}

export default App;

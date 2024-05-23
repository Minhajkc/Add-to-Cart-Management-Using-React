import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { remove_item,increment,decrement } from '../actions/cartActions';

function CartModal({ isModalOpen, setIsModalOpen }) {
  const items = useSelector((state) => state.cart.value);
  const dispatch = useDispatch();

  const handleDelete = (item) => {
    dispatch(remove_item(item));
  };
  const handleIncrement = (item) => {
    dispatch(increment(item));
  };
  const handleDecrement = (item) => {
    dispatch(decrement(item));
  };

 

  return (
    <div className={` m-4 bg-gray-500 p-4 w-80 ${isModalOpen ? 'block' : 'hidden'}`}>
      <div>
        <div className="modal-background p-3 float-right font-bold" onClick={() => setIsModalOpen(false)}>X</div>
        <h1 className='text-black p-3 text-center' onClick={() => setIsModalOpen(false)}>CART</h1>
        <div className="box p-4">
      {items.map((item, index) => (
        <div key={index} className='mb-5 '>
          <img className="card-img-top w-20" src={item.image} alt={item.name} />
          <p className='font-bold text-white'><span className='text-black'>Name:</span>  {item.name}</p>
          <p className='font-bold text-white'><span className='text-black'>Price:</span> {item.price}</p>
          <p className='font-bold text-white'><span className='text-black'>Quantity:</span> {item.quantity}</p>
          <button className='modal-close is-large font-bold  mb-4 mt-2 text-warning text-xl' aria-label='close' onClick={() => handleIncrement(item.id)}>+</button>
          <button className='modal-close is-large font-bold  ml-5 text-warning text-xl' aria-label='close' onClick={() => handleDecrement(item.id)}>-</button>
          <button className='modal-close is-large font-bold float-right mt-2  text-red-400' aria-label='close' onClick={()=>handleDelete(item.id)}>Delete</button>
        
        </div>
      ))}
    </div>
        <button className="modal-close is-large font-bold " aria-label="close" onClick={() => setIsModalOpen(false)}>Close</button>
      </div>
    </div>
  );
}

export default CartModal;

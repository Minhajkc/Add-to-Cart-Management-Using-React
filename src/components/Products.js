import React from 'react';
import { useDispatch } from 'react-redux';
import './products.css';
import productsData from '../products.json';
import { addto_cart } from '../actions/cartActions';

function Productslist() {
  const dispatch = useDispatch();


  const handleAddToCart = (item) => {
    dispatch(addto_cart(item));
    console.log(item.name);
  };


  return (
    <div className="col-lg-12">
      <div className="productlist flex justify-between m-20">
        {productsData.products.map((product) => (
          <div key={product.id} className="card bg-black text-white" style={{ width: '18rem' }}>
            <img className="card-img-top" src={product.image} alt={product.name} />
            <div className="card-body text-center">
              <h5 className="card-title font-bold">{product.name}</h5>
              <p className="card-text">{product.description}</p>
              <p className="card-text">Price: <span className='font-bold'>${product.price}</span> </p>
              <button onClick={() => handleAddToCart(product)} className="btn bg-gray-500 text-white font-semibold mt-3 ">Add to Cart</button>  
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Productslist;

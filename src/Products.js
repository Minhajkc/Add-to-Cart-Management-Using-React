import React from 'react';
import './products.css';
import productsData from './products.json';

function Productslist() {
  return (
    <div className="col-lg-12">
      <div className="productlist flex justify-between m-20">
        {productsData.products.map((product) => (
          <div key={product.id} className="card bg-black text-white " style={{ width: '18rem' }}>
            <img className="card-img-top" src={product.image} alt={product.name} />
            <div className="card-body">
              <h5 className="card-title font-bold">{product.name}</h5>
              <p className="card-text">{product.description}</p>
              <p className="card-text">Price: <span className='font-bold'>${product.price}</span> </p>
              <a href="#" className="btn bg-gray-500 text-white font-semibold">Add to Cart</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Productslist;

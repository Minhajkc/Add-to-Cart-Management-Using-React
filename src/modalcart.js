import React from 'react';

function CartModal({ isModalOpen, setIsModalOpen }) {

  return (
    <div className={` m-4 bg-gray-500 p-4 ${isModalOpen ? 'block' : 'hidden'}`}>
      <div>
        <div className="modal-background p-3 float-right font-bold" onClick={() => setIsModalOpen(false)}>X</div>
        <h1 className='text-black p-3 text-center'>MYCART</h1>
        <div className="box p-4">
          <p>hejedncjkdnskcsdjkcndsjckjdc d cdndjksncs  Line 16:15:  The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link, use a button and change it with appropriate styles. Learn more: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md  jsx-a11y/anchor-is-valid</p>
        </div>
        <button className="modal-close is-large font-bold text-white" aria-label="close" onClick={() => setIsModalOpen(false)}>Close</button>
      </div>
    </div>
  );
}

export default CartModal;

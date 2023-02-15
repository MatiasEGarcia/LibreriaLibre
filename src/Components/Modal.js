import React from 'react'

function Modal({ children, title, isOpen, closeModal }) {

  const handlePropagation = (e) => e.stopPropagation();

  return (
    <div className={`modal ${isOpen && "isOpen"}`} onClick={() => closeModal()}>
      <div className='modalContainer' onClick={handlePropagation}>
        <div className='modalHeader'>
          <h2>{title}</h2>
          <button className='btn btn-danger modalClose' onClick={() => closeModal()}>
            <i className="bi bi-x-lg"></i>
          </button>
        </div>
        {children}
      </div>
    </div>
  )
}

export default Modal
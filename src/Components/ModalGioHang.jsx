import React, { Component } from 'react';

class ModalGioHang extends Component {
  render() {
    let { gioHang } = this.props;
    return (
      <div
        className='modal fade'
        id='exampleModal'
        tabIndex={-1}
        aria-labelledby='exampleModalLabel'
        aria-hidden='true'
      >
        <div className='modal-dialog text-center'>
          <div className='modal-content'>
            <div className='modal-header text-center'>
              <h5 className='modal-title text-center' id='exampleModalLabel'>
                Thông tin sản phẩm
              </h5>
              <button
                type='button'
                className='close'
                data-dismiss='modal'
                aria-label='Close'
              >
                <span aria-hidden='true'>×</span>
              </button>
            </div>
            <div className='modal-body'>
              <div className='text-dark'>
                <img
                  classname='rounded w-100'
                  height={250}
                  alt='...'
                  src={`${gioHang.image}`}
                />
                <h4 className='text-center'>Name: {gioHang.name}</h4>
                <h4 className='text-center'>Price: {gioHang.price}</h4>
                <h4 className='text-center'>
                  Quantity: 
                  <span className='text-primary text-center'>{gioHang.quantity}</span>
                </h4>
                <h4 className='text-center'>
                  Description:
                  <span className='text-primary text-center'>{gioHang.description}</span>
                </h4>
              </div>
            </div>
            <div className='modal-footer'>
              <button
                type='button'
                className='btn btn-secondary'
                data-dismiss='modal'
              >
                Close
              </button>
              <button type='button' className='btn btn-primary'>
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ModalGioHang;

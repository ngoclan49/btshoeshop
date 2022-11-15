import React, { Component } from 'react';
// import ModalGioHang from './ModalGioHang';

class Sanpham extends Component {
  render() {
    const { sanPham, clickSanPham } = this.props;
    return (
      <div>
        <div className='card text-white'>
          <img className='card-img-top' src={sanPham.image} alt='Title' />
          <div className='card-body'>
            <h4 className='card-title text-dark'>{sanPham.name}</h4>
            <p className='text-dark'>{sanPham.price}$</p>
            <button className='btn btn-dark'>
              Add to Carts <i class='fa fa-cart-plus'></i>
            </button>
            <button
              type='button'
              className='btn btn-success mx-3'
              data-toggle='modal'
              data-target={`#exampleModal`}
              onClick={() => clickSanPham(sanPham)}
            >
              View Detail
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Sanpham;

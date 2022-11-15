import React, { Component } from 'react';
// import ModalGioHang from './ModalGioHang';
import Sanpham from './Sanpham';

class DanhSachSanPham extends Component {
  render() {
    const { arrSP, sanPham } = this.props;
    return (
      <div className='container'>
        <div className='row'>
          {arrSP.map((sanPham1, index) => {
            return (
              <div className='col-md-4' key={index}>
                <Sanpham sanPham={sanPham1} clickSanPham={sanPham} />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default DanhSachSanPham;

import React, { Component } from 'react';
import DanhSachSanPham from './DanhSachSanPham';
import ModalGioHang from './ModalGioHang';
import shoesData from '../data/shoesData.json';

class BaiTapShoeShop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gioHang: {
        id: 1,
        name: 'Adidas Prophere',
        alias: 'adidas-prophere',
        price: 350,
        description:
          'The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n',
        shortDescription:
          'The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n',
        quantity: 995,
        image: 'http://svcy3.myclass.vn/images/adidas-prophere.png',
      },
    };
  }

  clickSanPham = (shoeItem) => {
    this.setState({
      gioHang: shoeItem,
    });
  };

  render() {
    return (
      <div className='container'>
        <h3 className='text-center mt-5'>Shoes shop</h3>
        <DanhSachSanPham arrSP={shoesData} sanPham={this.clickSanPham} />
        <ModalGioHang gioHang={this.state.gioHang} />
      </div>
    );
  }
}

export default BaiTapShoeShop;

import React, { Component } from 'react'
import phoneData from './data.json';
import SanPham from './SanPham';

export default class Infor_cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sanPham: phoneData[0]
        }
    }

    renderSanPham = () => {
        return phoneData.map((sp, index) => {
            return (
                <SanPham key={index} dt={sp} xemCT={this.XemChiTiet} />
            )
        })
    }
    XemChiTiet = (sanPhamCT) => {
        this.setState({
            sanPham: sanPhamCT
        })
    }
    render() {
        const { hinhAnh, tenSP, manHinh, hdh, camT, camS, ram, rom } = this.state.sanPham;
        return (
            <div className='container'>
                <div className='row'>
                    {this.renderSanPham()}
                </div>
                <div className='row my-5'>
                    <div className='col-6'>
                        <h3>{tenSP}</h3>
                        <img src={hinhAnh} width={338} />
                    </div>
                    <hr />
                    <div className='col-6'>
                        <h3>Thông Số Kĩ Thuật</h3>
                        <table className='table text-left'>
                            <tr>
                                <th>Màn Hình : </th>
                                <th>{manHinh}</th>
                            </tr>
                            <tr>
                                <th>Hệ Điều Hành : </th>
                                <th>{hdh}</th>
                            </tr>
                            <tr>
                                <th>Camera Trước : </th>
                                <th>{camT}</th>
                            </tr>
                            <tr>
                                <th>Camera Sau : </th>
                                <th>{camS}</th>
                            </tr>
                            <tr>
                                <th>Bộ Nhớ Ram : </th>
                                <th>{ram}</th>
                            </tr>
                            <tr>
                                <th>ROM : </th>
                                <th>{rom}</th>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

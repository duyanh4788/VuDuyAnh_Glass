import React, { Component } from 'react'

export default class SanPham extends Component {

    render() {
        let { dt } = this.props;
        return (
            <div className="card col-4">
                <img className="card-img-top" src={dt.hinhAnh} alt height={335} />
                <div className="card-body text-left">
                    <h4 className="card-title">{dt.tendt}</h4>
                    <button className='btn btn-primary mx-1' onClick={() => this.props.xemCT(dt)}>Detail</button>
                    <button className='btn btn-danger'>Cart</button>
                </div>
            </div>
        )
    }
}

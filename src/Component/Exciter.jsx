import React, { Component } from 'react'

export default class Exciter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            img: './img/xe1.png'
        }
    }
    renderXe = (color) => {
        let imgSource = '';
        switch (color) {
            case 'dark': {
                imgSource = './img/xe1.png';
            }; break;
            case 'light': {
                imgSource = './img/xe2.png';
            }; break;
            case 'danger': {
                imgSource = './img/xe3.png';
            }; break;
            case 'primary': {
                imgSource = './img/xe4.png';
            }; break;
        }
        this.setState({
            img: imgSource
        })
    }
    render() {
        return (
            <div className='container xeEx py-5'>
                <h1>Chọn Màu Xe</h1><br/>
                <div className='row'>
                    <div className="col-3">
                        <button className='btn' onClick={() => this.renderXe('dark')}>
                            <i class="far fa-circle bg-dark text-dark"></i>
                        </button>
                    </div>
                    <div className="col-3">
                        <button className='btn' onClick={() => this.renderXe('light')} >
                            <i class="far fa-circle bg-light text-light"></i>
                        </button>
                    </div>
                    <div className="col-3">
                        <button className='btn' onClick={() => this.renderXe('danger')}>
                            <i class="far fa-circle bg-danger text-danger"></i>
                        </button>
                    </div>
                    <div className="col-3">
                        <button className='btn' onClick={() => this.renderXe('primary')}>
                            <i class="far fa-circle bg-primary text-primary"></i>
                        </button>
                    </div>
                </div>
                <div className='image'>
                    <img src={this.state.img} alt="" />
                </div>
            </div>
        )
    }
}

import React, { Component } from 'react'
import Infor_cart from './Infor_cart';

export default class Cart extends Component {
    render() {
        return (
            <div className='container'>
                <h1 className='text-center'>List Phone</h1>
                <Infor_cart />
            </div>
        )
    }
}

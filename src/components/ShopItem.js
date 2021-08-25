import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export default class ShopItem extends Component {
    render() {
        const ite = this.props.item 
        return (
            <div className="card col-8 mb-3">
                <h5 className="card-header">
                    <Link to={`/shop/${ite.id}`}>{ite.name}</Link>
                </h5>

                <div className="card-body">
                    <h5 className="card-title">${ite.price}</h5>
                </div>
            </div>

        )
    }
}

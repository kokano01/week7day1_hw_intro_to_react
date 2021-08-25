import React, { Component } from 'react'

export default class ItemDetail extends Component {

    constructor() {
        super();
        this.state = { item: {} }
    }


    componentDidMount = async () => {
        const res = await fetch(`http://127.0.0.1:8000/api/items/${this.props.my_match.params.id}`);
        const data = await res.json();
        console.log(data)
        this.setState({ item: data })
    }

    render() {
        const ite = this.state.item
        return (
            <div>
                <div className="card col-8 mb-3">
                    <h5 className="card-header">{ite.name}</h5>
                    <div className="card-body">
                        <h5 className="card-title">${ite.price}</h5>
                        <p className="card-text">{ite.description}</p>
                    </div>
                </div>
            </div>
                )
    }
}

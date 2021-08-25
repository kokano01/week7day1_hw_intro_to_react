import React, { Component } from 'react'
import ShopItem from '../components/ShopItem';

export default class Shop extends Component {

    constructor(){
        super();
        this.state = {
            items:[]
        }
    }


    componentDidMount = async ()=>{
        const res = await fetch("http://127.0.0.1:8000/api/items/");
        const data = await res.json();
        console.log(data)
        this.setState({items:data})
    }

    render() {
        return (
            <div className="container">
                {this.state.items.map((ite, i)=><ShopItem item={ite} key={i}/>)}
            </div>
        )
    }
}

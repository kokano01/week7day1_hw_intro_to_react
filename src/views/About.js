import React, { Component } from 'react'

export default class About extends Component {
    render() {
        return (
            <div>
                <h1>This is the About page</h1>
                <h3>The company is {this.props.my_company}</h3>
            </div>
        )
    }
}

import React, { Component } from 'react'

export default class StudentsPage extends Component {
    render() {
        const s = this.props.student
        return (
            <div className="col-12 col-lg-4 col-md-6 my-4">
                <div className="card">
                    <div className="card-body">
                        <p className="card-text">{s.first_name} {s.last_name}</p>
                    </div>
                </div>
            </div>
        )
    }
}

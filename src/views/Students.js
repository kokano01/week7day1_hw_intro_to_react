import React, { Component } from 'react';
import StudentsPage from '../components/StudentsPage';


export default class Students extends Component {
    constructor() {
        super();
        this.state = {
            students: []
        }
    }

    getStudents = () => {
        fetch("https://shohablog-django.herokuapp.com/api/")
        .then(res => res.json())
        .then(data => { 
            console.log(data)
            this.setState({
                students: data.students 
            })
        })
        .catch(error => console.log(error))
    }

    componentDidMount() {
        this.getStudents()
    }

    render() {
        return (
            <div class="container text-center">
                <div className="row">
                    <h1>Launch 1</h1>
                    {this.state.students.map((a, i) => <StudentsPage student={a} key={i} />)}
                </div>
            </div>
        )
    }
}

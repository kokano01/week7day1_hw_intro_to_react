import React, { Component } from 'react';
import StudentsPage from '../components/StudentsPage';


export default class Students extends Component {
    constructor() {
        super();
        console.log("I was created")
        this.state = {
            students: []
        }
    }

    getStudents = () => {
        fetch("https://shohablog-django.herokuapp.com/api/")
        .then(res => res.json())
        .then(data => {  //grab data from the json file
            console.log(data)
            this.setState({
                students: data.students //change empty articles from constructor and replace to articles with data from json
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

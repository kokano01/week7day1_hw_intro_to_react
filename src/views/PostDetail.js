import React, { Component } from 'react'

import { Link } from 'react-router-dom'

export default class PostDetail extends Component {

    constructor() {
        super();
        this.state = { post: {} }
    }

    componentDidMount = async () => {
        const res = await fetch(`http://127.0.0.1:8000/api/posts/${this.props.my_match.params.id}`);
        const data = await res.json();
        console.log(data)
        this.setState({ post: data })
    }

    handleDelete = () =>{console.log("delete")

    }

    render() {
    const p = this.state.post
    return (
        <div className="card col-8 mb-3">
            <h5 className="card-header">{p.title}</h5>
            <div className="card-body">
                <h5 className="card-title">{p.content}</h5>
                <p className="card-text">By {p.author} on {p.date_posted}</p>
            </div>
                {/* update */}
            <div className="container">
                <Link to={`/blog/update/${p.id}`} className="btn btn-secondary">Update</Link>
                   {/* delete */}
                    <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal">
                      Delete
                    </button>
                    
                    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                      <div className="modal-dialog">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Delete post</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                          </div>
                          <div className="modal-body">
                            Are you sure?
                          </div>
                          <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" onClick={()=>this.handleDelete()}className="btn btn-danger">Yes, delete</button>
                          </div>
                        </div>
                      </div>
                    </div>

            </div>

        </div>
    )
}
}

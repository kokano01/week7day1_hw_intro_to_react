import React, { Component } from 'react'

export default class UpdatePost extends Component {
    render() {
        return (
            <form className= "container border">
                <h1>Update Post</h1>
                <div class="mb-3">
                    <label class="form-label">Title</label>
                    <input type="text" class="form-control" name="title" placeholder="Title" />
                </div>
                <div class="mb-3">
                    <label class="form-label">Content</label>
                    <textarea class="form-control" name="content" rows="3"></textarea>
                </div>
                <button className="btn btn-primary">Submit</button>
            </form>
        )
    }
}

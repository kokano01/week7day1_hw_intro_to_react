import React, { Component } from 'react'
import NewsPost from '../components/NewsPost';

export default class News extends Component {
    constructor() {
        super();
        console.log("I was created")
        this.state = {
            articles: []  // set state.item to one
        }
    }
    // created our own function
    getNews = (topic='sports') => {
        const API_KEY = process.env.REACT_APP_NEWS_API_KEY;
        fetch(`https://newsapi.org/v2/everything?q=${topic}&apiKey=${API_KEY}`)
        .then(res => res.json())
        .then(data => {  //grab data from the json file
            console.log(data)
            this.setState({
                articles: data.articles    //change empty articles from constructor and replace to articles with data from json
            })
        })
        .catch(error => console.log(error))
    }

    componentDidMount() {
        this.getNews()
       
        // this.setState(
        //     {item: 2}   //change the item to 2
        // )
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const topic = event.target.topic.value; // target gets the thing that triggered event, which is the onSubmit. This line saves whatever the person typed in the bar to "topic"
        event.target.topic.value = '';
        this.getNews(topic)
    }


    render() {
        console.log("I rendered")

        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="input-group mb-3"> 
                    <input type="text" className="form-control" name = "topic" placeholder="Search a topic.." aria-label="Search a topic" aria-describedby="button-addon2" /> 
                    <button className="btn btn-outline-secondary" type="submit" id="button-addon2">Search</button>
                </form>

                <div className="row">
                    <h1>This is the News page</h1>
                    {this.state.articles.map((a, i) => <NewsPost article={a} key={i} />)}
                    {/* <h3>Item: {this.state.item}</h3> */}
                </div>
            </div>
        )
    }
}

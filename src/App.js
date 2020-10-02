import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from 'axios'

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: []
    };
  }
  componentDidMount() {
    this.getAllPosts();
  }

  getAllPosts() {
    axios.get("/api/post").then((res) => {
      this.setState({ posts: res.data });
    });
  }

  render() {
    console.log(this.state.posts);
    return (
      <div className="App">
        {this.state.posts.map((post) => (
          <div>
            <p>{post.title}</p>
            <p>{post.content}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default App;

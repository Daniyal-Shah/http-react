// import logo from "./logo.svg";
import "./App.css";
import React from "react";
// import axios from "axios";
import http from "./services/httpService";
import config from "./config.json";

class App extends React.Component {
  state = {
    posts: [],
  };

  async componentDidMount() {
    const { data: posts } = await http.get(config.apiEndPoint);
    // console.log(posts);
    this.setState({ posts });
  }

  handleAdd = async () => {
    const obj = { title: "a", body: "b" };
    const { data: post } = await http.post(config.apiEndPoint, obj);
    console.log(post);

    const posts = [post, ...this.state.posts];
    this.setState({ posts });
  };

  handleUpdate = async (post) => {
    post.title = "Updated";
    const response = await http.put(config.apiEndPoint + "/" + post.id, post);
    console.log(response);

    const posts = this.state.posts;
    const index = posts.indexOf(post);
    posts[index] = post;
    this.setState({ posts });
  };

  handleDelete = async (post) => {
    const originalPosts = this.state.posts;

    const posts = this.state.posts.filter((p) => p.id !== post.id);
    this.setState({ posts });

    try {
      await http.delete(config.apiEndPoint + "/" + post.id);
    } catch (error) {
      if (error.response && error.response.status === 404) {
        alert("This post has already been deleted");
      }

      this.setState({ posts: originalPosts });
    }
  };

  render() {
    return (
      <div className="container p-5">
        <div className="row">
          <div className="col">
            <button className="btn btn-primary" onClick={this.handleAdd}>
              Add
            </button>
            <table className="table">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Update</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {this.state.posts.map((post) => (
                  <tr key={post.id}>
                    <td>{post.title}</td>
                    <td>
                      <button
                        className="btn btn-info btn-sm"
                        onClick={() => this.handleUpdate(post)}
                      >
                        Update
                      </button>
                    </td>
                    <td>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => this.handleDelete(post)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

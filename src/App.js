// import logo from "./logo.svg";
import "./App.css";
import React from "react";
import axios from "axios";

const apiEndPoint = "https://jsonplaceholder.typicode.com/posts";
class App extends React.Component {
  state = {
    posts: [],
  };

  async componentDidMount() {
    const { data: posts } = await axios.get(apiEndPoint);
    // console.log(posts);
    this.setState({ posts });
  }

  handleAdd = async () => {
    const obj = { title: "a", body: "b" };
    const { data: post } = await axios.post(apiEndPoint, obj);
    console.log(post);

    const posts = [post, ...this.state.posts];
    this.setState({ posts });
  };

  handleUpdate = (post) => {
    console.log("update", this.state.posts);
  };
  handleDelete = (post) => {
    console.log("delete", this.state.posts);
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

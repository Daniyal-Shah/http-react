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

  handleUpdate = async (post) => {
    post.title = "Updated";
    const response = await axios.put(apiEndPoint + "/" + post.id, post);
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
      await axios.delete(apiEndPoint + "/" + post.id);
      throw new Error("");
    } catch (error) {
      alert(error);
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

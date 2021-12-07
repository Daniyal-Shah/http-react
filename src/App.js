import logo from './logo.svg';
import './App.css';
import React from 'react';


function App() {
  return (
    <div className="container p-5">
      <div className="row">
        <div className="col">
          <button className="btn btn-primary">
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
          {/* {this.state.posts.map(post => (
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
          ))} */}
        </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;

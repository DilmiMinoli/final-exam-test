import React, { Component } from 'react';

class Navbar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary mb-5">
          <div className="container">
            <a className="navbar-brand" href="#">SLIIT AF Project</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">Courses</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/create-subject">Create Subject</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/create-course">Create Course</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
    )
  }
}

export default Navbar;
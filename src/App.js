import React, { Component } from "react";

// Data
import authors from "./data";

// Components
import Sidebar from "./Sidebar";
import AuthorsList from "./AuthorsList";
import AuthorDetail from "./AuthorDetail";

class App extends Component {
  state = {
    currentAuthor: null
  };
  selectAuthor = author => {
    this.setState({ currentAuthor: author });
  };
  render() {
    let content;
    if (this.state.currentAuthor !== null) {
      content = <AuthorDetail curentAuthor={this.state.currentAuthor} />;
    } else {
      content = (
        <AuthorsList authors={authors} selectAuthor={this.selectAuthor} />
      );
    }
    return (
      <div id="app" className="container-fluid">
        <div className="row">
          <div className="col-2">
            <Sidebar onClick={() => props.state.currentAuthor(null)} />
          </div>
          <div className="content col-10">{content}</div>
        </div>
      </div>
    );
  }
}

export default App;

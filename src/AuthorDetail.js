import React, { Component } from "react";

class AuthorDetail extends Component {
  render() {
    return (
      <div className="author col-xs-10">
        <div>
          <h3>{this.props.currentAuthor.first_name}</h3>
          <img
            src="http://catchingfire.ca/wp-content/uploads/2016/09/question-mark-square-01.png"
            className="img-thumbnail"
            alt={this.props.currentAuthor}
          />
        </div>
        <table className="mt-3 table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Authors</th>
              <th>Color</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>I SHOULD BE A BOOK NAME</td>
              <td>I SHOULD BE A STRING OF THIS BOOK'S AUTHORS</td>
              <td>
                <button className="btn" style={{ backgroundColor: "blue" }} />
              </td>
            </tr>
            <tr>
              <td>I SHOULD BE ANOTHER BOOK NAME</td>
              <td>I SHOULD BE A STRING OF THIS OTHER BOOK'S AUTHORS</td>
              <td>
                <button className="btn" style={{ backgroundColor: "red" }} />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default AuthorDetail;

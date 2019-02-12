import React, { Component } from "react";

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: "" };
  }

  render() {
    return (
      <div
        className="search-bar"
        style={{ margin: "20px 20px 10px 20px", background: "#F0FFFF" }}
      >
        <input
          value={this.state.term}
          onChange={event => this.onInputChange(event.target.value)}
          style={{ margin: "0px 5px 15px 5px" }}
        />
      </div>
    );
  }

  onInputChange(term) {
    this.setState({ term });
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;

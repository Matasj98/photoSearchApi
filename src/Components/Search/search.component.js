import React from "react";
import "./search.style.scss";
import { connect } from "react-redux";
import { addQuery } from "../../Actions/action";

class Search extends React.Component {
  constructor() {
    super();

    this.state = {
      searchText: ""
    };
  }

  setSearchText = e => {
    this.setState({ searchText: e.target.value });
  };

  saveQuery = () => {
    if (this.state.searchText.length !== 0) {
      this.props.onAddQuery(this.state.searchText);
    } else {
      alert(`Input field is empty`);
    }
  };

  render() {
    return (
      <div className="search">
        <input
          type="text"
          placeholder="Search for images"
          onChange={e => this.setSearchText(e)}
        />
        <div>
          <button onClick={() => this.props.search(this.state.searchText)}>
            Search
          </button>
          <button onClick={this.saveQuery}>Save</button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onAddQuery: name => dispatch(addQuery(name))
});

export default connect(null, mapDispatchToProps)(Search);

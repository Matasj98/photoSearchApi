import React from "react";
import { connect } from "react-redux";
import "./savedQueries.scss";
import { removeQuery } from "../../Thunk/removeQuery";

class SavedQueries extends React.Component {
  render() {
    return (
      <div className="savedQueries">
        <h1>Saved Queries</h1>
        <ul>
          {this.props.savedQueries.map((name, index) => (
            <div className="u-flexSpaceBetween" key={index}>
              <li onClick={() => this.props.search(name)}>{name}</li>
              <button onClick={() => this.props.onRemoveQuery(name)}>
                Delete
              </button>
            </div>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  savedQueries: state.savedQueries.queries
});

const mapDispatchToProps = dispatch => ({
  onRemoveQuery: name => dispatch(removeQuery(name))
});

export default connect(mapStateToProps, mapDispatchToProps)(SavedQueries);

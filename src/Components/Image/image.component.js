import React from "react";
import "./image.style.scss";
import "../../Assets/LoadingSpiner/spiner.style.scss";

class Image extends React.Component {
  constructor() {
    super();

    this.state = {
      loading: true
    };
  }
  render() {
    const loader = (
      <div className="spinner">
        <div className="bounce1"></div>
        <div className="bounce2"></div>
        <div className="bounce3"></div>
      </div>
    );

    return (
      <div className="image">
        <img
          alt="lala"
          src={this.props.imageId}
          onLoad={() => this.setState({ loading: false })}
        />
        {this.state.loading ? loader : null}
      </div>
    );
  }
}

export default Image;

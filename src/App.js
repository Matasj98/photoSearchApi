import React from "react";
import "./App.scss";
import axios from "axios";
import Search from "./Components/Search/search.component";
import Image from "./Components/Image/image.component";
import SavedQueries from "./Components/SavedQueries/savedQueries.component";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      imageData: null
    };
  }

  getUnsplashImage = item => {
    axios
      .get("https://api.unsplash.com/search/photos", {
        params: { query: item },
        headers: {
          Authorization:
            "Client-ID c2c1213b2926687ccb49f712386ddba8815b841153dd247b26b4de79efea9fea"
        }
      })
      .then(res => this.setState({ imageData: res.data.results }))
      .catch(err => console.log(err));
  };

  render() {
    const { imageData } = this.state;

    let imageContainer = <h1>Search For Images</h1>;
    if (imageData !== null) {
      imageContainer = imageData.map(image => (
        <Image key={image.id} imageId={image.urls.full} />
      ));
      if (imageData.length === 0) {
        imageContainer = <h1>No Images Found</h1>;
      }
    }

    return (
      <div>
        <Search search={this.getUnsplashImage} />
        <div className="content">
          <div
            className={
              imageData === null
                ? null
                : imageData.length === 0
                ? null
                : "imageGrid"
            }
          >
            {imageContainer}
          </div>
          <SavedQueries search={this.getUnsplashImage} />
        </div>
      </div>
    );
  }
}

export default App;

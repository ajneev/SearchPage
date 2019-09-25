import React from "react";
//import axios from "axios";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

class App extends React.Component {
  state = { images: [] };
  // onSearchSubmit = async term => {
  //   const response = await axios.get("https://api.unsplash.com/search/photos", {
  //     params: {
  //       query: term
  //     },
  //     headers: {
  //       Authorization:
  //         "Client-ID b8ab6ac45602774807ba27df2dde0fae257c3b3c9cff6ac14ac12fe5f40ff1e7"
  //     }
  //   });

  //   console.log(response.data.results);
  //   this.setState({ images: response.data.results });
  // };

  onSearchSubmit = async term => {
    const response = await unsplash.get("/search/photos", {
      params: { query: term }
    });

    console.log(response.data.results);
    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        Found: {this.state.images.length} images
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;

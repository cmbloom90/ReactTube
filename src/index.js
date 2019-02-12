import _ from "lodash";
import React, { Component } from "react";
import ReactDOM from "react-dom";
import YTSearch from "youtube-api-search";
import SearchBar from "./components/search_bar";
import VideoList from "./components/video_list";
import VideoDetail from "./components/video_detail";

const API_KEY = "AIzaSyCqcQUFJ6FLdrfU1MJoIOECqayoYif4CQM";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch("motorcross");
  }

  videoSearch(term) {
    YTSearch({ key: API_KEY, term: term }, videos => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    const videoSearch = _.debounce(term => {
      this.videoSearch(term);
    }, 300);
    return (
      <div style={{ background: "#F0FFFF" }}>
        <h1 style={{ margin: "5px 5px 10px 5px" }}>Video Search</h1>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
          videos={this.state.videos}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));

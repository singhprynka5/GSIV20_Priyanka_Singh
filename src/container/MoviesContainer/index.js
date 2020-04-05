import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchMoviesList } from "../../actions/movies";
import MovieCard from "../../components/MovieCard";
import { Card, Icon, Segment, Button } from "semantic-ui-react";

class MoviesContainer extends Component {
  state = {
    searchString: ""
  };
  componentDidMount() {
    window.history.pushState('', null, './');
    this.props.fetchMoviesList(1);
  }

  displayMoviesList(list) {
    if (Array.isArray(list) && list.length > 0) {
      list = list.sort((a, b) => {
        a = new Date(a.release_date);
        b = new Date(b.release_date);
        return a > b ? -1 : a < b ? 1 : 0;
      });
      return (
        <Card.Group itemsPerRow={4}>
          {list.map((details, index) => (
            <MovieCard movieData={details} key={index} />
          ))}
        </Card.Group>
      );
    } else {
      return null;
    }
  }

  handleSearch = e => {
    this.setState({
      searchString: e.target.value
    });
  };

  render() {
    const { moviesList } = this.props;
    if (moviesList && moviesList.results) {
      return (
        <Segment>
          <input
            type="text"
            name="search"
            placeholder="Search"
            onChange={e => this.handleSearch(e)}
          ></input>
          <Icon disabled name="home" style={{ marginLeft: "10px" }} />
          {this.displayMoviesList(moviesList.results)}
          <div style={{ marginTop: "21px", marginLeft: "50%" }}>
            <Button
              content="Load More...."
              primary
              style={{ width: "200px" }}
              onClick={() => {
                this.props.fetchMoviesList(moviesList.page, "loadmore");
              }}
            />
          </div>
        </Segment>
      );
    } else {
      return null;
    }
  }
}

const mapStateToProps = state => {
  return {
    moviesList: state.moviesList
  };
};

const mapDispatchToProps = dispatch => ({
  fetchMoviesList: (page, loadmore) => dispatch(fetchMoviesList(page, loadmore))
});

export default connect(mapStateToProps, mapDispatchToProps)(MoviesContainer);

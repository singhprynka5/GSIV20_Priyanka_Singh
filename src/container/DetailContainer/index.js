import React, { Component } from "react";
import { connect } from "react-redux";
import { getMovieDetail } from "../../actions/movies";
import { Item, Header } from "semantic-ui-react";

class MoviesContainer extends Component {
  componentDidMount() {
    const url = new URL(window.location.href);
    const searchParams = url.searchParams;
    const id = searchParams.get("id");
    this.props.getMovieDetail(id);
  }

  render() {
    const { movieDetail } = this.props;
    return movieDetail ? (
      <div style={{ padding: "16px" }}>
        <Item.Group>
          <Header as="h3" dividing>
            Movie Details
          </Header>
          <Item>
            <Item.Image
              src={`https://image.tmdb.org/t/p/original/${movieDetail.poster_path}`}
            />
            <Item.Content>
              <Item.Header>
                {movieDetail.title} ({movieDetail.vote_average})
              </Item.Header>
              <Item.Meta>
                <span className="stay">
                  {movieDetail.release_date
                    ? movieDetail.release_date.split("-")[0]
                    : ""}
                  |{movieDetail.runtime}
                </span>
              </Item.Meta>
              <Item.Description>{movieDetail.overview}</Item.Description>
            </Item.Content>
          </Item>
        </Item.Group>
      </div>
    ) : null;
  }
}

const mapStateToProps = state => {
  return {
    movieDetail: state.movieDetail
  };
};

const mapDispatchToProps = dispatch => ({
  getMovieDetail: id => dispatch(getMovieDetail(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(MoviesContainer);

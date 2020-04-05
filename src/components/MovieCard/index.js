import React, { Component } from "react";
import { Card, Rating, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";

class MovieCard extends Component {
  render() {
    const { movieData } = this.props;

    return (
      <Link to={`/details?id=${movieData.id}`} style={{padding:"5px"}}>
        <Card>
          <Image
            src={`https://image.tmdb.org/t/p/original/${movieData.poster_path}`}
            wrapped
            ui={false}
          />
          <Card.Content>
            <Card.Header
              style={{ lineHeight: "1.5em", height: "3em", overflow: "hidden" }}
            >
              {movieData.title}
            </Card.Header>
            <Card.Meta>
              <Rating defaultRating={1} icon="star" disabled />
              {movieData.vote_average}
            </Card.Meta>
            <Card.Description
              style={{ lineHeight: "1.5em", height: "3em", overflow: "hidden" }}
            >
              {movieData.overview}
            </Card.Description>
          </Card.Content>
        </Card>
      </Link>
    );
  }
}

export default MovieCard;

import React, { Component } from 'react';

class ContentRating extends Component {

  constructor() {
    super();

    this.state = {
      likes: 0,
      dislikes: 0,
      total: 0
    }
  }

  handleLike = () => {
    this.setState({
      likes: this.state.likes + 1,
      total: this.state.total + 1
    })
  }

  handleDislike = () => {
    this.setState({
      dislikes: this.state.dislikes + 1,
      total: this.state.total + 1
    })
  }

  render() {
    return (
      <>
        <div className="content-rating">
          <p>Hello</p>
          <div className="rating-buttons">
            <button className="rating-buttons__like" onClick={ this.handleLike }>
              Like ({ this.state.likes })
            </button>
            <button className="rating-buttons__dislike" onClick={ this.handleDislike }>
              Dislike ({ this.state.dislikes })
            </button>
            <p>Total Ratings: { this.state.total }</p>
          </div>
        </div>
      </>
    )
  }
}

export default ContentRating;

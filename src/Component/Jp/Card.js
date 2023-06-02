import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class Card extends Component {
  constructor(props) {
    super(props);
    this.onClicked = this.onClicked.bind(this);
  }

  componentDidMount() {}

  componentWillUnmount() {
    //window.removeEventListener('click', this.onDetailsClicked.bind(this));
  }

  onClicked() {
    const url = this.props.project.link;
    window.open(url);
  }

  render() {
    const { title, image, descriptionJP, link } = this.props.project;
    const disabledLink = link === "" ? " disabled" : "";

    return (
      <div className="card">
        <img
          src={process.env.PUBLIC_URL + image}
          className="card-img-top"
          alt="..."
          style={{ height: "200px", maxWidth: "100%", objectFit: "cover" }}
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{descriptionJP}</p>
          <button
            className={"btn btn-outline-dark p-1" + disabledLink}
            onClick={() => this.onClicked()}
          >
            プロジェクトを見る
          </button>
        </div>
      </div>
    );
  }
}

export default withRouter(Card);

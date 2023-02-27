import React, { Component } from "react";

export default class Prayer extends Component {
  render() {
    if (!this.props.data) {
      return (
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="error-msg">
                <p className="py-5 text-center">Loading...</p>
              </div>
            </div>
          </div>
        </div>
      );
    }
    const Prayer = this.props.data.map((item) => {
      return (
        <>
          <li>{item.sahri}</li>
        </>
      );
    });
    console.log(this.props.data);
    return <div>{Prayer}</div>;
  }
}

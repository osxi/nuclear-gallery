import React from 'react';

export default class extends React.Component {
  render() {
    return (
      <img className="image" src={this.props.src} />
    );
  }
}

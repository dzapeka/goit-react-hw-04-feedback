import { Component } from 'react';

export default class Section extends Component {
  render() {
    const { title, children } = this.props;

    return (
      <div className="section">
        <h2>{title}</h2>
        {children}
      </div>
    );
  }
}

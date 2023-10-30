import { Component } from 'react';

export default class FeedbackOptions extends Component {
  render() {
    const { options, onLeaveFeedback } = this.props;

    return (
      <>
        {options.map(option => (
          <button
            key={option}
            type="button"
            data-feedback={option}
            onClick={() => onLeaveFeedback(option)}
          >
            {option}
          </button>
        ))}
      </>
    );
  }
}

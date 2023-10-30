import { Component } from 'react';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positiveFeedback: 0,
  };

  handleUpdateFeedback = event => {
    const feedback = event.target.dataset.feedback;
    this.setState(state => ({
      [feedback]: state[feedback] + 1,
    }));
  };

  render() {
    return (
      <>
        <h2>Please leave feedback</h2>
        <button
          type="button"
          data-feedback="good"
          onClick={this.handleUpdateFeedback}
        >
          Good
        </button>
        <button
          type="button"
          data-feedback="neutral"
          onClick={this.handleUpdateFeedback}
        >
          Neutral
        </button>
        <button
          type="button"
          data-feedback="bad"
          onClick={this.handleUpdateFeedback}
        >
          Bad
        </button>
        <h2>Statistics</h2>
        <section>
          <p>Good: {this.state.good}</p>
          <p>Neutral: {this.state.neutral}</p>
          <p>Bad: {this.state.bad}</p>
          <p>Total: {this.state.total}</p>
          <p>Positive feedback: {this.state.positiveFeedback}%</p>
        </section>
      </>
    );
  }
}

export default Feedback;

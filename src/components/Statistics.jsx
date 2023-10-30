import { Component } from 'react';
import Notification from './Notification';

export default class Statistics extends Component {
  render() {
    const { good, neutral, bad } = this.props;
    const total = good + neutral + bad;
    const positiveFeedback = total > 0 ? Math.round((good / total) * 100) : 0;

    return (
      <>
        {total > 0 ? (
          <>
            <p>Good: {good}</p>
            <p>Neutral: {neutral}</p>
            <p>Bad: {bad}</p>
            <p>Total: {total}</p>
            <p>Positive feedback: {positiveFeedback}%</p>
          </>
        ) : (
          <Notification message="There is no feedback" />
        )}
      </>
    );
  }
}

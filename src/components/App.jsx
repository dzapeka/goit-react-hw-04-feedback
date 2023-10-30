import { Component } from 'react';
import FeedbackOptions from './FeedbackOptions';
import Section from './Section';
import Statistics from './Statistics';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  }

  onLeaveFeedback = option => {
    this.setState(state => ({
      [option]: state[option] + 1,
    }));
  };

  render() {
    const options = Object.keys(this.state);

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          <Statistics {...this.state} />
        </Section>
      </>
    );
  }
}

import React from 'react';
import { Box } from './Feedback.styled';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Section from './Section';
import Notification from './Notification';

class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedback = name => {
    this.setState(
      prevState => ({
        [name]: prevState[name] + 1,
      }),
      this.countTotalFeedback
    );
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    if (total === 0) {
      return 0;
    }
    return Math.round((good / total) * 100);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();

    return (
      <Box>
        <Section title="FeedbackOptions">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={{
              handleFeedback: this.handleFeedback,
            }}
          />
        </Section>
        <Section title="Statistics">
          {total === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              countPositiveFeedbackPercentage={this.countPositiveFeedbackPercentage()}
            />
          )}
        </Section>
      </Box>
    );
  }
}
export default Feedback;

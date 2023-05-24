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
    total: 0,
  };
  handleGoodFeedback = () => {
    this.setState(
      prevState => ({
        good: prevState.good + 1,
      }),
      this.countTotalFeedback
    );
  };
  handleNeutralFeedback = () => {
    this.setState(
      prevState => ({
        neutral: prevState.neutral + 1,
      }),
      this.countTotalFeedback
    );
  };
  handleBadFeedback = () => {
    this.setState(
      prevState => ({
        bad: prevState.bad + 1,
      }),
      this.countTotalFeedback
    );
  };
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    this.setState({ total });
  };
  countPositiveFeedbackPercentage = () => {
    const { good, total } = this.state;
    if (total === 0) {
      return 0;
    }
    return Math.round((good / total) * 100);
  };

  render() {
    const { good, neutral, bad, total } = this.state;
    return (
      <Box>
        <Section title="FeedbackOptions">
          <FeedbackOptions
            options={{ good, neutral, bad }}
            onLeaveFeedback={{
              handleGoodFeedback: this.handleGoodFeedback,
              handleNeutralFeedback: this.handleNeutralFeedback,
              handleBadFeedback: this.handleBadFeedback,
            }}
          />
        </Section>
        <Section title="Statistics">
          {this.state.total === 0 ? (
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

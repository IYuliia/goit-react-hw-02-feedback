// import PropTypes from 'prop-types';
import React from 'react';
import { Box, Section, Title, Button, Option } from './Feedback.styled';

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
        good: (prevState.good += 1),
      }),
      this.countTotalFeedback
    );
  };
  handleNeutralFeedback = () => {
    this.setState(
      prevState => ({
        neutral: (prevState.neutral += 1),
      }),
      this.countTotalFeedback
    );
  };
  handleBadFeedback = () => {
    this.setState(
      prevState => ({
        bad: (prevState.bad += 1),
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
        <Section className="feedbackOptions">
          <Title>Please leave feedback</Title>
          <Button onClick={this.handleGoodFeedback}>Good</Button>
          <Button onClick={this.handleNeutralFeedback}>Neutral</Button>
          <Button onClick={this.handleBadFeedback}>Bad</Button>
        </Section>
        <Section className="feedbackStatistics">
          <Title>Statistics</Title>
          <Option>Good: {good} </Option>
          <Option>Neutral: {neutral}</Option>
          <Option>Bad: {bad}</Option>
          <Option>Total: {total}</Option>
          <Option>
            Positive feedback: {this.countPositiveFeedbackPercentage()}%
          </Option>
        </Section>
      </Box>
    );
  }
}
export default Feedback;

// Feedback.propTypes = {};

import React from 'react';
import { Button } from './Feedback.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  //   const { good, neutral, bad } = options;
  const { handleGoodFeedback, handleNeutralFeedback, handleBadFeedback } =
    onLeaveFeedback;
  return (
    <>
      <Button onClick={handleGoodFeedback}>Good</Button>
      <Button onClick={handleNeutralFeedback}>Neutral</Button>
      <Button onClick={handleBadFeedback}>Bad</Button>
    </>
  );
};

export default FeedbackOptions;

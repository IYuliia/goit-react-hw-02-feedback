import React from 'react';
import { Button } from './Feedback.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const handleFeedback = name => {
    onLeaveFeedback.handleFeedback(name);
  };

  return (
    <>
      {options.map(name => (
        <Button key={name} onClick={() => handleFeedback(name)}>
          {name}
        </Button>
      ))}
    </>
  );
};

export default FeedbackOptions;

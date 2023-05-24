import React from 'react';
import { Option } from './Feedback.styled';

const Statistics = ({
  good,
  neutral,
  bad,
  total,
  countPositiveFeedbackPercentage,
}) => {
  return (
    <>
      <Option>Good: {good} </Option>
      <Option>Neutral: {neutral}</Option>
      <Option>Bad: {bad}</Option>
      <Option>Total: {total}</Option>
      <Option>Positive feedback: {countPositiveFeedbackPercentage}%</Option>
    </>
  );
};
export default Statistics;

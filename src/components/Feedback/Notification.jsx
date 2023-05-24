import React from 'react';
import { Option } from './Feedback.styled';

const Notification = ({ message }) => {
  return <Option>{message}</Option>;
};

export default Notification;

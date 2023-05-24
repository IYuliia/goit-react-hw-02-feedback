import React from 'react';
import { Title } from './Feedback.styled';

const Section = ({ title, children }) => {
  return (
    <div>
      <Title>{title}</Title>
      {children}
    </div>
  );
};

export default Section;

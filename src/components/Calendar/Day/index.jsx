import React from 'react';
import { format } from 'date-fns';

const Day = props => {
  const { day } = props;
  return <td>{format(day, 'd')}</td>;
};

export default Day;

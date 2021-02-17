import React from 'react';
import { format } from 'date-fns';

const CurrentDay = props => {
  const { currentDay } = props;
  return (
    <div>
      <p>{format(currentDay, 'EEEE')}</p>
      <p>{format(currentDay, 'd')}</p>
    </div>
  );
};

export default CurrentDay;

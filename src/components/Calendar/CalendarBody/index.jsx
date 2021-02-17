import React from 'react';
import Month from '../Month';
import Week from '../Week';

const DaysOfWeek = () => {
  return (
    <tr>
      <td>D</td>
      <td>D</td>
      <td>D</td>
      <td>D</td>
      <td>D</td>
      <td>D</td>
      <td>D</td>
    </tr>
  );
};

const CalendarBody = props => {
  const { currentDay } = props;

  return (
    <div>
      <table>
        <thead>
          <DaysOfWeek />
        </thead>
        <tbody>
          <Month year={2021} month={1} />
        </tbody>
      </table>
    </div>
  );
};

export default CalendarBody;

import React from 'react';
import { parse, addDays } from 'date-fns';
import Day from '../Day';

const Week = props => {
  const { year, week } = props;
  /* 
    1. Дата начала недели.
    2. Порядковый номер недели в году. 
      номерНедели, год
  */

  const startOfWeek = parse(`${year} ${week}`, 'Y w', new Date());

  const buildWeek = () =>
    new Array(7).fill(null).map((_, index) => {
      return (
        <Day
          key={`${year}-${week}-${index}`}
          day={addDays(startOfWeek, index)}
        />
      );
    });

  return <tr>{buildWeek()}</tr>;
};

export default Week;

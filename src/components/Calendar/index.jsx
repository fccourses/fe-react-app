import React, { Component } from 'react';
import { add, format, getWeeksInMonth } from 'date-fns';

class Calendar extends Component {
  constructor (props) {
    super(props);
    this.state = {
      day: new Date()
    };
  }

  changeDay = options => {
    const { day } = this.state;
    const newDate = add(day, options);
    this.setState({ day: newDate });
  };

  render () {
    const { day } = this.state;
    return (
      <div>
        <div>{format(day, 'EEEE LLL y')}</div>
        <div>THIS MONTH CONTAINS: {getWeeksInMonth(day)}</div>
        <button onClick={() => this.changeDay({ days: 1 })}>Add day</button>
        <button onClick={() => this.changeDay({ weeks: 1 })}>Add Week</button>
        <button onClick={() => this.changeDay({ years: 1 })}>Add Year</button>
      </div>
    );
  }
}

export default Calendar;

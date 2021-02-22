import React, { Component } from 'react';
import CalendarBody from './CalendarBody';
import CurrentDay from './CurrentDay';

class Calendar extends Component {
  constructor (props) {
    super(props);
    this.state = {
      currentDay: new Date(),
    };
  }

  render () {
    const { currentDay } = this.state;
    return (
      <section>
        <CurrentDay currentDay={currentDay} />
        <CalendarBody currentDay={currentDay} />
      </section>
    );
  }
}

export default Calendar;

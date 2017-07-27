import moment from 'moment';
import React, {Component} from 'react';
import {DateRange} from 'react-date-range';

class Calendar extends Component {
  render() {
    return (
      <div className='calendar'>
        <h2>
          Calendar
        </h2>
        <DateRange onInit={this.handleSelect} onChange={this.handleSelect}/>
      </div>
    )
  }
}

export default Calendar;

import React from 'react';
import './styles/calendarInput.css';
// import calendarIconSmall from './pictures/calendarIconSmall.png';
// import dropdownTriangle from './pictures/dropdownTriangle.png';

class Calendar extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let d = new Date;
    let dateString = `${days[d.getDay()]}, ${months[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`;

    return (
      <div id="input-container">
        <div>
          <img id="calendar-icon-small" src="https://s3-us-west-1.amazonaws.com/yum-eats-calendar/calendarIconSmall.png"/>
        </div>
        <div>
          <input id="calendar-input" type="text" disabled="disabled" value={dateString}/>
        </div>
        <div>
          <img id="dropdown-triangle" src="https://s3-us-west-1.amazonaws.com/yum-eats-calendar/dropdownTriangle.png"/>
        </div>
      </div>
    )
  }
}

export default Calendar;
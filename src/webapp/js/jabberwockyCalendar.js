import React from 'react';
import ReactDOM from 'react-dom';
import cx from 'classnames';

export default class JabberwockyCalendar extends React.Component {

  render() {
    var classes = cx({
      "calendarItemDestConfig" : this.props.type == "DestinationConfiguration",
      "calendarItemExclusion" : this.props.type == "Exclusion",
      "calendarItem" : true
    });

    return (
        <div className={classes}>
          <h3>{this.props.type == "DestinationConfiguration" ? "Rule" : "Exclusion"} &mdash; {this.props.name}</h3>
          <p>
            <b>Activation Date:&nbsp;</b>
            {this.props.activationDate}
          </p>
          <p>
            <b>De-activation Date:&nbsp;</b>
            {this.props.deactivationDate}
          </p>
        </div>
    )
  }
}
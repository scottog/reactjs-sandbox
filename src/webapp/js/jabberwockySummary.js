import React from 'react';
import ReactDOM from 'react-dom';
import './../css/index.css';
import cx from 'classnames';

export default class JabberwockySummary extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        selected : false
      };
  }


   render () {
     //something
    var classes = cx({
      "summarySelected" : this.props.selected,
      "summary" : true
    });

     return (
       <div className={classes}>
            <h3>
                {this.props.name}
            </h3>
            <p>
                Activation Date: {this.props.activationDate}
            </p>
            <p>
                Deactivation Date: {this.props.deactivationDate}
            </p>
       </div>
     )
   }
}

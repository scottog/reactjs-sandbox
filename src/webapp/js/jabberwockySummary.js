import React from 'react';
import ReactDOM from 'react-dom';
import './../css/index.css';
import cx from 'classnames';

export default class JabberwockySummary extends React.Component {
  constructor(props) {
      super(props);
      this.state = ({
        selected : this.props.selected
      });
  }

  handleSelect(){
    this.setState({
      selected : true
    });
  }

   render () {
     //something
    var classes = cx({
      "summarySelected" : this.state.selected,
      "smallSummary" : true
    });

     return (
       <div className={classes} onClick={() => this.handleSelect()}>
            <h3>
                {this.props.name}
            </h3>
            <p>
                Activation Date: {this.props.activationDate}
            </p>
            <br/>
            <p>
                Deactivation Date: {this.props.deactivationDate}
            </p>
       </div>
     )
   }
}

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import cx from 'classnames';

class JabberwockyCreation extends React.Component {
   render () {
     //something

     return (
       <div className="row">
            <div id="jabberwockyName" className="col-xs-12">
                <label for={"name-" + this.props.name +"-"+ this.props.id}>{this.props.name} Name:</label>
                <br />
                <input type="text" id={"name-" + this.props.name +"-"+ this.props.id}/>
            </div>
            <div className="col-xs-6">
                <label for={"activation-" + this.props.name +"-"+ this.props.id}>Activation Date</label>
                <br />
                <input type="date" id={"activation-" + this.props.name +"-"+ this.props.id}/>
            </div>
            <div className="col-xs-6">
              <label for={"deactivation-" + this.props.name +"-"+ this.props.id}>Deactivation Date</label>
              <br />
              <input type="date" id ={"deactivation-" + this.props.name +"-"+ this.props.id}/>
            </div>
       {this.props.type === 'DestinationConfiguration' ? (
         <div className="col-xs-12">
           <label for={"description-" + this.props.name +"-"+ this.props.id}>Description</label>
           <br />
           <textarea rows="4" id ={"description-" + this.props.name +"-"+ this.props.id}/>
         </div>
       ) : ""
       }
       </div>
     )
   }
}

// ========================================

ReactDOM.render(
    <JabberwockyCreation type="DestinationConfiguration" name="Rule"/>,
    document.getElementById('root')
);

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
                    Exclusion - {this.props.name}
                </h3>
                <hr className="headBar" />
                <div className="leftInfo">
                <p className="infoTitle">Activation Date:</p>
                <p className="info"> {this.props.activationDate}</p>
                <br />
                <p className="infoTitle">Deactivation Date:</p>
                <p className="info"> {this.props.deactivationDate}</p>
                </div>
                <div className="rightInfo">
                    <p className="infoTitle">Created By:</p>
                    <p className="info"> JLIPPIAT</p>
                    <br />
                    <p className="infoTitle">Approved By:</p>
                    <p className="info"></p>
                </div>

            </div>
        )
    }
}

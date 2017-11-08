import React from 'react';
import ReactDOM from 'react-dom';
import './../css/index.css';

function SubmitButton(props) {
    return (
        <button className={props.value ? "submitButtonPressed" : "toolButton"}
                onClick={() => props.onClick()}>
            {props.value ? 'Pending' : 'Submit for Appoval'}
        </button>
    );
}

function EditButton(props) {
    return (
        <button className="toolButton"
                onClick={() => props.onClick()}>
            Edit Exclusion
        </button>
    );

}

function DeleteButton(props) {
    return (
        <button className="toolButton"
                onClick={() => props.onClick()}>
            Delete Exclusion
        </button>
    );

}

export default class ExclusionToolBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            submitted: !!this.props.isSubmitted
        };
    }

    handleSubmitClick(i) {
        // backend call - push - set submitted status to PENDING using id
        if (!this.state.submitted) {
            this.setState({
                submitted: true
            })
        }
    }

    openEditModal(i) {
        //backend call - retrieve - all editable data fields using id
        //open modal/new page and allow for changes to editable data
        //backend call - push - id + all new fields
    }

    openDeleteModal(i) {
        //open modal/new page and get confirmation on delete
        //backend call - push - id
    }

    renderSubmit(i) {
        return (
            <SubmitButton value={this.state.submitted}
                          onClick={() => this.handleSubmitClick(i)}
                />
        );
    }

    renderEdit(i) {
        return (
            <EditButton value={this.state.submitted}
                        onClick={() => this.openEditModal(i)}
                />
        );
    }

    renderDelete(i) {
        return (
            <DeleteButton value={this.state.submitted}
                          onClick={() => this.openDeleteModal(i)}
                />
        );
    }

    render() {
        return (
            <div className="board-row">
                {this.renderSubmit(0)}
                {this.renderEdit(1)}
                {this.renderDelete(2)}
            </div>
        );
    }
}

class Page extends React.Component {
    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <ToolBar />
                </div>
                <div className="game-info">
                    <div>{/* status */}</div>
                    <ol>{/* TODO */}</ol>
                </div>
            </div>
        );
    }
}

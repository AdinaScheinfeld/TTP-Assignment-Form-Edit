import React, { Component } from 'react'
import './FormEdit.css'

class FormEdit extends Component {

    constructor(props) {
        super(props);

        this.state = {
            // original names
            firstName: props.firstName,
            lastName: props.lastName,
            // states for new first and last names
            newFirstName: props.firstName,
            newLastName: props.lastName,
            // indicator regarding whether user is editing
            edit: false
        }
    };

    // method for the editForm button
    editForm = () => {
        this.setState({edit:true});
    };

    // method to update the first name
    editFirstName = (event) => {
        this.setState({newFirstName: event.target.value});
    }

    // method to update the last name
    editLastName = (event) => {
        this.setState({newLastName: event.target.value});
    }

    // method for the save button
    save = () => {
        this.setState({
            edit: false,
            firstName: this.state.newFirstName,
            lastName: this.state.newLastName
        });
    }

    // method for the cancel button
    cancel = () => {
        this.setState({
            edit: false,
            firstName: this.state.firstName,
            lastName: this.state.lastName
        });
    }

    // render the screen
    render() {
        if(!this.state.edit){        
            return (        
                <div className='displayInput'>
                    <p>{this.state.firstName}</p>
                    <p>{this.state.lastName}</p>
                    <button className='myButton' onClick={this.editForm}>Edit</button>
                </div>            
            );    
        }
        else{
            return(
            <div className='setInput'>
                <input className='myInputField' type='text' value={this.state.newFirstName} onChange={this.editFirstName}></input>
                <input className='myInputField' type='text' value={this.state.newLastName} onChange={this.editLastName}></input>
                <br />
                <button className='myButton' onClick={this.save}>Save</button>
                <button className='myButton' onClick={this.cancel}>Cancel</button>
            </div>    
            );
        }
    }
}

export default FormEdit;


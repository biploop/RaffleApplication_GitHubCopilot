import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Confirmation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ticketNumber: '',
            paypalAccountNumber: '',
        };
    }
    handleBackClick = () => {
        this.props.history.goBack();
      };

    handlePaypalAccountNumberChange = (event) => {
        this.setState({ paypalAccountNumber: event.target.value });
    };

    handleSubmit = (event) => {
        event.preventDefault();
    };

    render() {
        return (
            <div className='container-flex'>
                <div className='row-4 border rounded p-5 '>
                    <h1 className='row justify-content-center'>Raffle Entry Confirmation</h1>
                    <div className='row justify-content-center mb-3'>
                        Your personal information has been recorded, here's your ticket information
                    </div>
                    <div className='row justify-content-center'>
                        <div className='col-8 rounded border p-5 mb-3'>
                            <h6>Ticket Number:</h6> 
                                <div className='row justify-content-center'>
                                    20001
                                </div>
                            <h6>Bet Date:</h6>  
                                <div className='row justify-content-center'>
                                    2021-01-01
                                </div>
                            <h6>Draw Date:</h6> 
                                <div className='row justify-content-center'>
                                    2021-01-01
                                </div>
                        </div>
                        <Link to="/add-raffle-entry" 
                            className="btn btn-primary" 
                            onClick={this.handleBackClick}>
                                    Back to Raffle Entry Form
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

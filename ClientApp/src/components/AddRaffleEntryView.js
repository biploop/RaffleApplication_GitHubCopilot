import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class AddRaffleEntryView extends Component {
    static displayName = AddRaffleEntryView.name;


    constructor(props) {
        super(props);
        this.state = {
            user: {
                id: 0,
                name: '',
                sex: '',
                age: 0,
                birthdate: '2000-01-01',
                address: '',
                emailAddress: '',
                contactNumber: 0,
                paypalAccountNumber: 0,
            },
            confirmationMessage: '',
        };
    }

    handleInputChange = (e) => {
        const { name, value } = e.target;
        this.setState((prevState) => ({
            user: { ...prevState.user, [name]: value },
        }));
    };

    handleSubmit = () => {
    const formData = new URLSearchParams();

    for (const key in this.state.user) {
        formData.append(key, this.state.user[key]);
    }

    fetch("http://localhost:5011/api/user/AddUser", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formData.toString(),
    })
        .then((response) => response.json())
        .then((data) => {
            if (data && data.id) {
                // Get the current date in real-time
                const currentDate = new Date();
                const dateOfBet = currentDate.toISOString();

                // Generate a unique 5-digit raffle ticket number
                const raffleTicketNumber = Math.floor(10000 + Math.random() * 90000);

                // Log the date of bet and raffle ticket number
                console.log(`Date of Bet: ${dateOfBet}`);
                console.log(`Raffle Ticket Number: ${raffleTicketNumber}`);

                this.setState(
                    {
                        confirmationMessage: 'User added successfully!',
                        user: {
                            id: 0,
                            name: '',
                            sex: '',
                            age: 0,
                            birthdate: '2000-01-01',
                            address: '',
                            emailAddress: '',
                            contactNumber: 0,
                            paypalAccountNumber: 0,
                        },
                    },
                    () => {
                        this.props.history.push('/confirmation');
                    }
                );
            }
        })
        .catch((error) => {
            console.error(error);
        });
};





    render() {
        return (
            <div>
                <h1 className="row justify-content-center pt-5">Add a Raffle Entry</h1>
                <p className="row justify-content-center">Create a raffle entry here.</p>
                <div className="row border rounded p-5">

                <form>

                    <div className="input-group mb-3">
                        <span className="input-group-text" id="id-input">
                            ID
                        </span>
                        <input type="number"
                            className="form-control"
                            placeholder="Assign id number."
                            aria-label="id"
                            aria-describedby="id-input"
                            name="id"
                            value={this.state.user.id} 
                            onChange={this.handleInputChange} 
                        >
                        </input>
                    </div>
                    <div className="input-group mb-1">
                        <span className="input-group-text" id="name-input">
                            Name
                        </span>
                        <input type="text"
                            className="form-control"
                            placeholder="Enter  name."
                            aria-label="name"
                            aria-describedby="name-input"
                                name="name"
                                value={this.state.user.name}
                                onChange={this.handleInputChange} 
                        >
                        </input>
                    </div>
                    <div className="input-group mb-1">
                        <span className="input-group-text" id="sex-input">
                            Sex
                        </span>
                        <input type="text"
                            className="form-control"
                            placeholder="Enter sex."
                            aria-label="Sex"
                            aria-describedby="sex-input"
                                name="sex"
                                value={this.state.user.sex}
                                onChange={this.handleInputChange} 
                        >
                        </input>
                    </div>
                    <div className="input-group mb-1">
                        <span className="input-group-text" id="age-input">
                            Age
                        </span>
                        <input type="number"
                            className="form-control"
                            placeholder="Enter age."
                            aria-label="age"
                            aria-describedby="age-input"
                                name="age"
                                value={this.state.user.age}
                                onChange={this.handleInputChange} 
                        >
                        </input>
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="birthdate-input">
                            Birthdate
                        </span>
                        <input type="date"
                            className="form-control"
                            placeholder="Enter birthdate."
                            aria-label="birthdate"
                            aria-describedby="birthdate-input"
                                name="birthdate"
                                value={this.state.user.birthdate}
                                onChange={this.handleInputChange} 
                        >
                        </input>
                    </div>
                        <div className="input-group mb-1">
                            <span className="input-group-text" id="address-input">
                                Address
                            </span>
                            <input type="text"
                                className="form-control"
                                placeholder="Enter address."
                                aria-label="address"
                                aria-describedby="address-input"
                                name="address"
                                value={this.state.user.address}
                                onChange={this.handleInputChange} 
                            >
                            </input>
                       </div>
                    <div className="input-group mb-1">
                        <span className="input-group-text" id="emailAddress-input">
                            Email Address
                        </span>
                        <input type="text"
                            className="form-control"
                            placeholder="Enter email-address."
                            aria-label="emailAddress"
                            aria-describedby="emailAddress-input"
                                name="emailAddress"
                                value={this.state.user.emailAddress}
                                onChange={this.handleInputChange} 
                        >
                        </input>
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="contact-number-input">
                            Contact Number
                        </span>
                        <input type="number"
                            className="form-control"
                            placeholder="Enter contact number."
                            aria-label="contact-number"
                            aria-describedby="contact-number-input"
                                name="contactNumber"
                                value={this.state.user.contactNumber}
                                onChange={this.handleInputChange} 
                        >
                        </input>
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="paypal-account-number-input">
                            Paypal Account Number
                        </span>
                        <input type="number"
                            className="form-control"
                            placeholder="Enter Paypal Account Number."
                            aria-label="paypalAccountNumber"
                            aria-describedby="paypal-accouunt-number-input"
                                name="paypalAccountNumber"
                                value={this.state.user.paypalAccountNumber}
                                onChange={this.handleInputChange} 
                        >
                        </input>
                    </div>
                        <Link to="/confirmation"
                        className="btn btn-primary align-center"
                        onClick={this.handleSubmit}>
                        Submit Raffle Entry
                        </Link>
                        {this.state.confirmationMessage && (
                            <div className="alert alert-success mt-3">
                                {this.state.confirmationMessage}
                            </div>
                        )}
                    </form>
                </div>
            </div>

        );
    }
}

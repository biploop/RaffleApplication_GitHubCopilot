import React, { Component } from 'react';

export class RaffleDrawView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            winner: null,
        };
    }

    drawWinner = () => {
        // Make an API call to your backend to fetch a random user
        fetch("http://localhost:5011/api/user/GetRandomUser")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then((data) => {
                this.setState({ winner: data });
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    };

    resetWinner = () => {
        this.setState({ winner: null });
    };

    render() {
        const { winner } = this.state;

        return (
            <div className="container-md">
                <div className="row p-5 ">
                    <h1>Raffle Draw</h1>
                    <div className="row border rounded border-secondary p-3">

                        <div>
                            {winner ? (
                                <div>
                                    <p><h3>Winner:</h3></p>
                                    <p className="text-danger text-center"><h1>{winner.name}</h1></p>
                                </div>
                            ) : (
                                <p>No winner yet.</p>
                            )}
                        </div>

                    </div>
                    <div className="row p-3">
                        <button type="button" className="btn btn-primary mb-2" onClick={this.drawWinner}>Draw a Winner</button>
                        <button type="button" className="btn btn-outline-primary" onClick={this.resetWinner}>Reset</button>
                    </div>

                </div>
                
                {/*<button onClick={this.drawWinner}>Draw Winner</button>*/}
                {/*<button onClick={this.resetWinner}>Reset</button>*/}

                {/*<div>*/}
                {/*    {winner ? (*/}
                {/*        <div>*/}
                {/*            <h2>Winner:</h2>*/}
                {/*            <p>{winner.name}</p>*/}
                {/*        </div>*/}
                {/*    ) : (*/}
                {/*        <p>No winner yet.</p>*/}
                {/*    )}*/}
                {/*</div>*/}
            </div>
        );
    }
}

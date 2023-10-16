import React, { useState, useEffect } from "react";

export function RaffleEntriesView() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5011/api/user/GetUsers")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="container-fluid">
          <div className="row">
              <p className="text-center">
                  <h1>Records of Raffle Entries and Users Information</h1>
              </p>
        <div className="col-md-12">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Sex</th>
                <th>Age</th>
                <th>Address</th>
                <th>Birthdate</th>
                <th>E-mail Address</th>
                <th>Contact Number</th>
                <th>Paypal Account Number</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                  <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.sex}</td>
                  <td>{user.age}</td>
                  <td>{user.address}</td>
                  <td>{new Date(user.birthdate).toLocaleDateString()}</td>
                  <td>{user.emailAddress}</td>
                  <td>{user.contactNumber}</td>
                  <td>{user.paypalAccountNumber}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

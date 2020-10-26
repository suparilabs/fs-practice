import React, { useState, useEffect } from "react";
import { getAll } from "./services/contactService";
import './App.css';

export const App = () => {

  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    retrieveContacts();
  }, []);

  const retrieveContacts = () => {
    getAll()
      .then(response => {
        setContacts(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            <th colSpan="1">Firt Name</th>
            <th colSpan="1">Last Name</th>
            <th colSpan="1">Contact Number</th>
          </tr>
        </thead>
        <tbody>
          {contacts &&
            contacts.map((contact) => (
              <tr key={contact["_id"]}>
                <td>{contact.FirstName}</td>
                <td>{contact.LastName}</td>
                <td>{contact.ContactNumber}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

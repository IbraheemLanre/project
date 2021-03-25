import React, { useEffect, useState } from "react";
import axios from "axios";

const PersonList = () => {
  const [persons, setPersons] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      const persons = res.data;
      console.log(persons);
      setPersons(persons);
    });
  }, []);

  return (
    <div>
      <h2>List of Persons</h2>
      <table>
        <thead>
          <tr>
            <th>PersonId</th>
            <th>Name</th>
            <th>Address</th>
            <th>Company</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Website</th>
          </tr>
        </thead>
        <tbody>
          {persons.map((person) => (
            <tr key={person.id}>
              <td>{person.id}</td>
              <td>{person.name}</td> 
              <td>{person.address.street} {person.address.suite} {person.address.zipcode} {person.address.city}</td>
              <td>{person.company.name}</td>
              <td>{person.email}</td>
              <td>{person.phone}</td>
              <td>{person.website}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PersonList;

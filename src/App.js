import React from "react";
import "./App.css";
import Doctors from "./components/doctors";
import Heading from "./components/heading";

function App() {
  const data = [
    {
      id: "123",
      name: "Ram",
      specialist: "Dentist",
      address: "2nd Street - Al Khaleej Rd - Deira - Dubai",
      coordinates: { x: "42.4564654", y: "44.345345435" },
    },
    {
      id: "8876",
      name: "Bob",
      specialist: "Dentist",
      address: "2nd Street - Al Khaleej Rd - Deira - Dubai",
      coordinates: { x: "42.4564654", y: "44.345345435" },
    },
    {
      id: "8876",
      name: "Bob",
      specialist: "Dentist",
      address: "2nd Street - Al Khaleej Rd - Deira - Dubai",
      coordinates: { x: "42.4564654", y: "44.345345435" },
    },
    {
      id: "8876",
      name: "Bob",
      specialist: "Dentist",
      address: "2nd Street - Al Khaleej Rd - Deira - Dubai",
      coordinates: { x: "42.4564654", y: "44.345345435" },
    },
    {
      id: "8876",
      name: "Bob",
      specialist: "Dentist",
      address: "2nd Street - Al Khaleej Rd - Deira - Dubai",
      coordinates: { x: "42.4564654", y: "44.345345435" },
    },
    {
      id: "8876",
      name: "Bob",
      specialist: "Dentist",
      address: "2nd Street - Al Khaleej Rd - Deira - Dubai",
      coordinates: { x: "42.4564654", y: "44.345345435" },
    },
    {
      id: "8876",
      name: "Bob",
      specialist: "Dentist",
      address: "2nd Street - Al Khaleej Rd - Deira - Dubai",
      coordinates: { x: "42.4564654", y: "44.345345435" },
    },
    {
      id: "8876",
      name: "Bob",
      specialist: "Dentist",
      address: "2nd Street - Al Khaleej Rd - Deira - Dubai",
      coordinates: { x: "42.4564654", y: "44.345345435" },
    },
    {
      id: "8876",
      name: "Bob",
      specialist: "Dentist",
      address: "2nd Street - Al Khaleej Rd - Deira - Dubai",
      coordinates: { x: "42.4564654", y: "44.345345435" },
    },
    {
      id: "8876",
      name: "Bob",
      specialist: "Dentist",
      address: "2nd Street - Al Khaleej Rd - Deira - Dubai",
      coordinates: { x: "42.4564654", y: "44.345345435" },
    },
    {
      id: "8876",
      name: "Bob",
      specialist: "Dentist",
      address: "2nd Street - Al Khaleej Rd - Deira - Dubai",
      coordinates: { x: "42.4564654", y: "44.345345435" },
    },
    {
      id: "8876",
      name: "Bob",
      specialist: "Dentist",
      address: "2nd Street - Al Khaleej Rd - Deira - Dubai",
      coordinates: { x: "42.4564654", y: "44.345345435" },
    },
  ];
  return (
    <div className="container">
      <div className="App">
        <div className="app__left">
          <Heading title={"Doctors List"} />
          <Doctors data={data} />
        </div>
        <div className="app__right">
          <Heading title={"Map"} />
        </div>
      </div>
    </div>
  );
}

export default App;

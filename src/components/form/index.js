import React from "react";
import { Container } from "./form.style";
import { Modal } from "../modal";

export class Form extends React.Component {
  constructor(props){
    super(props)

    this.state={
      username: {
        value: "",
        submittedValue: ""
      },
      birthdate: {
        value: "",
        submittedValue: ""
      },
      gender: {
        value: "",
        submittedValue: ""
      },
      isSubmitted: false,
      people: [],
      isError: false,
      showModal: false,
      selectedPerson: null,
    }
  }

  handleUsername = (event) => {
    this.setState({ 
      username: {...this.state.username, value: event.target.value }
    })
    console.log("updated username: " + this.state.username)
  }
  
  handleBirthdate = (event) => {
    this.setState({ 
      birthdate: {...this.state.birthdate, value: event.target.value }
    })
    console.log("updated birthdate: " + this.state.birthdate)
  }
  
  handleGender = (event) => {
    this.setState({
      gender: {...this.state.gender, value: event.target.value}
    })
    console.log("updated gender: " + this.state.gender)
  }

  validateFormFields = () => {
    const isInvalid = (
      this.state.username.value.trim() === '' ||
      this.state.birthdate.value.trim() === '' ||
      this.state.gender.value.trim() === ''
    )
    console.log("Form validation result:" + isInvalid)
    return isInvalid
  }
  
  handleSubmit = (event) => {
    event.preventDefault()

    this.setState ({
      isSubmitted: true
    })
    
    if(this.validateFormFields()){
      console.log("one of the fields are empty")
      this.setState({
        isError: true
      })
    } else {
      console.log("none of the fields are empty, form is valid")
      const newPerson = {
        username: this.state.username.value,
        birthdate: this.state.birthdate.value,
        gender: this.state.gender.value,
      };
      this.setState((prevState) => ({
        isSubmitted: true,
        people: [...prevState.people, newPerson], // Add the new person to the array
        username: { ...prevState.username, value: "" }, // Clear the input fields
        birthdate: { ...prevState.birthdate, value: "" },
        // gender: { ...prevState.gender, value: "" },
      }));
    }
  }

  handleMoreInfoClick = (person) => {
    console.log(person)
    this.setState({
      showModal: true,
      selectedPerson: person,
    })
  }

  handleDeletePerson = (index) => {
    console.log('hi') 
    const updatedPeople = [...this.state.people]; //copy of people array inside the variable.
    updatedPeople.splice(index, 1);
    this.setState({
      people: updatedPeople,
    });
  }
  
  render(){
    return (
      <Container>
        <div className="col1 box">
          <form onSubmit={this.handleSubmit.bind(this)}>
            <p>Username:</p>
            <input
              type="text"
              name="username"
              id="username"
              value={this.state.username.value}
              // required="true"
              placeholder="Enter your username"
              onChange={this.handleUsername}
              />
            <p>Birthdate:</p>
            <input
              type="date"
              name="birthdate"
              id="birthdate"
              value={this.state.birthdate.value}
              // required="true"
              placeholder="Birthdate"
              onChange={this.handleBirthdate}
            />

            <p>Gender:</p>
            <div className="buttons" onChange={this.handleGender}>
              <p>Male</p>
              <input
                type="radio"
                name="gender"
                id="male"
                // required="true"
                value={"male"}
                />
              <p>Female</p>
              <input
                type="radio"
                name="gender"
                id="female"
                // required="true"
                value={"female"}
                />
              <p>Other</p>
              <input
                type="radio"
                name="gender"
                id="other"
                // required="true"
                value={"other"}
                />
            </div>
            <input type="submit" value="submit" />
            {this.state.isSubmitted && (
              <>
                {this.state.people.some(person => person.username === '') && <p className="erro">*Username is required</p>}
                {this.state.people.some(person => person.birthdate === '') && <p className="erro">*Birthdate is required</p>}
                {this.state.people.some(person => person.gender === '') && <p className="erro">*Gender is required</p>}
              </>
            )}
          </form>
        </div>

        <div className="col2 box">
          <h2>List of People:</h2>
          {this.state.isSubmitted && (
            <>
            <ul>
            {this.state.people.map((person, index) => {
              if (person.username.trim() !== '' && person.birthdate.trim() !== '' && person.gender.trim() !== '') {
                return (
                  <li key={index}>
                    <p> {person.username}</p>
                    {/* <p>Birthdate: {person.birthdate}</p>
                    <p>Gender: {person.gender}</p> */}
                    <button onClick={() => this.handleDeletePerson(index)}>Delete</button>
                    <button onClick={() => this.handleMoreInfoClick(person)}>More...</button>
                  </li>
                );
              }
              return null; // Skip rendering this person
            })}
            </ul>
          </>
          )}
        </div>

        {this.state.showModal && (
          <Modal
            person={this.state.selectedPerson}
            closeModal={() => this.setState({showModal: false})}
          />
        )}
      </Container>
    )
  }
}
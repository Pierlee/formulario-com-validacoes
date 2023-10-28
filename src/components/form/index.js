import React from "react";
import { Container } from "./form.style";

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
    }
  }

  handleUsername = (event) => {
    this.setState({ 
      username: {...this.state.username, value: event.target.value }
    })
  }

  handleBirthdate = (event) => {
    this.setState({ 
      birthdate: {...this.state.birthdate, value: event.target.value }
    })
  }

  handleGender = (event) => {
    this.setState({
      gender: {...this.state.gender, value: event.target.value}
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.setState({
      isSubmitted: true,
      username: { ...this.state.username, submittedValue: this.state.username.value },
      birthdate: { ...this.state.birthdate, submittedValue: this.state.birthdate.value },
      gender: { ...this.state.gender, submittedValue: this.state.gender.value },
    })
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
                {this.state.username.value.length === 0 && <p className="erro">*O username é obrigatório</p>}
                {this.state.birthdate.value === '' && <p className="erro">*A data de nascimento é obrigatório</p>}
                {this.state.gender.value === '' && <p className="erro">*O genero é obrigatório</p>}
              </>
            )}
          </form>
        </div>

        <div className="col2 box">
          {this.state.isSubmitted && (
            <>
              <p>Username: {this.state.username.submittedValue}</p>
              <p>Birthdate: {this.state.birthdate.submittedValue}</p>
              <p>Gender: {this.state.gender.submittedValue}</p>
            </>
          )}
        </div>
      </Container>
    )
  }
}
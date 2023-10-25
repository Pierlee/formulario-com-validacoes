import React from "react";
import { Container } from "./form.style";
// import { testCPF } from "../testCpf/testCpf";
// import { testCpf } from "./TestCpf";

export class Form extends React.Component {
  constructor(props){
    super(props)

    this.state={
      username: {
        value: ""
      },
      birthdate: {
        value: ""
      },
      gender: {
        value: ""
      },
      isSubmitted: false,
    }
  }

  // handleChange = (event) => {
  //   this.setState({  })
  // }
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
    this.setState({isSubmitted: true})
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
                {this.state.username.value.length === 0 && <p className="erro">*O cpf é obrigatório</p>}
                {this.state.birthdate.value === '' && <p className="erro">*A data de nascimento é obrigatório</p>}
                {this.state.gender.value === '' && <p className="erro">*O genero é obrigatório</p>}
              </>
            )}
          </form>
        </div>

        <div className="col2 box">
          {this.state.isSubmitted && (
            <>
              <p>Username: {this.state.username.value}</p>
              <p>Birthdate: {this.state.birthdate.value}</p>
              <p>Gender: {this.state.gender.value}</p>
            </>
          )}
        </div>
      </Container>
    )
  }
}
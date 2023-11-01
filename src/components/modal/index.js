import React from "react";
import "./modal.css"

export const Modal = ({person, closeModal}) => {

  // if (!selectedPerson){
  //   return null
  // }

  return (
    <div className="modal">
      <div className="modal-content">
      <h2>Person Details</h2>
        <p>Username: {person.username}</p>
        <p>Birthdate: {person.birthdate}</p>
        <p>Gender: {person.gender}</p>
        <button onClick={closeModal}>Close</button>
      </div>
    </div>
  )
}
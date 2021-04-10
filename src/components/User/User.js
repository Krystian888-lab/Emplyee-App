import React from 'react';


const user = (props) => {

  const date = new Date();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();

  //return <h2>I am a user, current is {hour + ':' + minute + ':' + second}</h2>
  return <div>
    <button onClick={props.buttonClick} className="FormButton">Show user</button>
    <h2>Username: {props.username}</h2>
    <h3>Role: {props.role}</h3>
    <p>State: {props.children }</p>
  </div>
}

export default user;
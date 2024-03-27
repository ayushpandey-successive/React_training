/*Problem Statement :Create a functional component named UserCard that accepts the following props: name, email, and avatarURL.
Use the props to display the user's name, email, and an image (avatar) in the UserCard component.
Create multiple instances of the UserCard component with different user data.*/
import React from "react";

const UserCard = (props) => {
  console.log(props);
  return (
    <div className="user_component">
      <h3>Name: {props.user.name}</h3>
      <h4>Email: {props.user.email} </h4>
      <img src={props.user.image} alt="" />
    </div>
  );
};

export default UserCard;

import React from 'react'

const UserCard = (props) => {
    console.log(props)
  return (
    <div className='user_component'>
      <h3>Name: {props.user.name}</h3>
      <h4>Email: {props.user.email} </h4>
      <img src={props.user.image} alt="" />
    </div>
  )
}

export default UserCard

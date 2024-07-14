

function UserGreeting(props) {
  return (
    <div>
      {props.isLoggedIn ? <h2>welcome {props.userName} </h2> : <h2>please login</h2>}
    </div>
  )
}

export default UserGreeting;

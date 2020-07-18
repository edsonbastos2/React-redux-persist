import React from 'react';
import { connect } from 'react-redux';


function Login(props) {

  const handleTrocarNome = () => {
    props.setName('Bob')
  }
  return (
    <>
      <h4>Página de Login</h4>
      <p>O nome é {props.name}</p>
      <button onClick={handleTrocarNome}>Trocar nome</button>
    </>
  )
}

const mapStateProps = state => ({
  name: state.usuario.name
})

const mapDispatchToProps = dispatch => ({
  setName: (newName) => dispatch({
    type: 'SET_NAME',
    payload: { name: newName }
  })
})

export default connect(mapStateProps, mapDispatchToProps)(Login);
import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

function Home() {

  let history = useHistory();

  const dispatch = useDispatch()

  const name = useSelector(state => state.usuario.name);
  const contador = useSelector(state => state.usuario.contador)

  function handleButton() {
    setTimeout(() => {
      history.replace('/sobre')
    }, 2000)
  }

  const handleTrocarNome = () => {
    dispatch({
      type: 'SET_NAME',
      payload: { name: 'Edson Bastos' }
    })
  }

  const handleIncrement = () => {
    dispatch({
      type: 'INCREMENT_CONTADOR'
    })
  }
  return (
    <>
      <h1>Página Home</h1>
      <p>Nome: {name}</p>
      <p>Contador: {contador}</p>
      <button onClick={handleTrocarNome}>Trocar nome</button>
      <button onClick={handleIncrement}>+1</button>
      <button onClick={handleButton}>Ir para outra página</button>
    </>
  )
}

export default Home;
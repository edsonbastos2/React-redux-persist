import React from 'react';
import { useLocation } from 'react-router-dom'

function useQuery() {
  return new URLSearchParams(useLocation().search)
}

function Categoria() {

  let query = useQuery();

  let cat = query.get('tipo')
  return (
    <>
      <h4>Página Categoria</h4>
      <p>Categoria {cat}</p>
    </>
  )
}

export default Categoria;
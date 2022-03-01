import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <>
        <h2>404!</h2>
        <p>Página não encontrada ou removida. <Link to='/'>Página Inicial</Link></p>
    </>
  )
}

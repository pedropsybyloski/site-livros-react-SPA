import React from 'react'
import { Link } from 'react-router-dom'

export default function Catalogo({ livros }) {

  return (
    <main className='principal'>
      <h2>Categoria Programação</h2>
      <ol>
        {
          livros.filter(cat=>cat.categoria === 'programacao')
          .map((livro, ind)=>(
            <li key={ind}>
              <Link to={`/livro/${livro.slug}`}>{livro.titulo}</Link>
            </li>
          ))
        }
      </ol>
      <h2>Categoria Frontend</h2>
      <ol>
        {
          livros.filter(cat=>cat.categoria === 'frontend')
          .map((livro, ind)=>(
            <li key={ind}>
              <Link to={`/livro/${livro.slug}`}>{livro.titulo}</Link>
            </li>
          ))
        }
      </ol>
      <h2>Categoria Design</h2>
      <ol>
        {
          livros.filter(cat=>cat.categoria === 'design')
          .map((livro, ind)=>(
            <li key={ind}>
              <Link to={`/livro/${livro.slug}`}>{livro.titulo}</Link>
            </li>
          ))
        }
      </ol>
    </main>
  )
}

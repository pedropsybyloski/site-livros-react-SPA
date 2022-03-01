import React from 'react'
import { Link } from 'react-router-dom';
import Livro from './Livro';
import NotFound from './NotFound';

export default function Programacao({livros}) {
  return (
    <>
      {livros.filter(cat => cat.categoria === 'programacao')
      .map((livro, index) => (
        <div className='card' key={index}>
          <div className='thumb'>
            <img src={`imagens/capas/${livro.id}.jpg`} alt={`${livro.titulo}`} />
          </div>
          <div className='detalhes'>
            <h3>{livro.titulo}</h3>
            <p>{livro.descricao.length > 110 ? livro.descricao.slice(0, 110).concat('...') : livro.descricao}</p>
            <span><Link to={`/livro/${livro.slug}`} onClick={value => { //${livro.slug}
              const livro = data.find(livro => value.match.params.livroSlug === livro.slug); //livro.slug === li.match.params.id
              if (livro) return <Livro livro={livro} />
              else return <NotFound />
            }}>Leia mais &gt;</Link></span>
          </div>
        </div>
      ))}
    </>
  )
}

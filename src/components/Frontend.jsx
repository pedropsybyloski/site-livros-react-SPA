import React from 'react'
import { Link, useParams } from 'react-router-dom';
import Livro from './Livro';
import NotFound from './NotFound';

export default function Frontend({livros}) {
  const { title } = useParams();

  return (
    <>
      {livros.filter(cat => cat.categoria === 'frontend')
      .map((livro, index) => (
        <div className='card' key={index}>
          <div className='thumb'>
            <img src={`imagens/capas/${livro.id}.jpg`} alt={`${livro.titulo}`} />
          </div>
          <div className='detalhes'>
            <h3>{livro.titulo}</h3>
            <p>{livro.descricao.length > 110 ? livro.descricao.slice(0, 110).concat('...') : livro.descricao}</p>
            <div><Link to={`/livro/${livro.slug}`} onClick={value => { //${livro.slug}
              const livro = livros.find(livro => title === livro.slug); //livro.slug === li.match.params.id
              if (livro) return <Livro livro={livro} />
              else return <NotFound />
            }}>Leia mais &gt;</Link></div>
          </div>
        </div>
      ))}
    </>
  )
}

import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import Livro from './Livro';
import NotFound from './NotFound';

export default function Design({ livros }) {
  const { title } = useParams();
  const [livro, setLivros] = useState([]);

  useEffect(() => {
    setLivros(livros);
  }, []);

  return (
    <>
      {livros.filter(cat => cat.categoria === 'design')
        .map((l, index) => (
          <div className='card' key={index}>
            <div className='thumb'>
              <img src={`imagens/capas/${l.id}.jpg`} alt={`${l.titulo}`} />
            </div>
            <div className='detalhes'>
              <h3>{l.titulo}</h3>
              <p>{l.descricao.length > 110 ? l.descricao.slice(0, 110).concat('...') : l.descricao}</p>
              <span><Link to={`/livro/${l.slug}`} onClick={value => { //${livro.slug}
                const livro = livros.find(livro1 => title === livro1.slug); //livro.slug === li.match.params.id
                if (livro) return <Livro />
                else return <NotFound />
              }}>Leia mais &gt;</Link>
              </span>
            </div>
          </div>
        ))}
    </>
  )
}

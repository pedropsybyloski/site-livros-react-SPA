import React, { useEffect, useState } from 'react';
import {Link, useParams} from 'react-router-dom'
import Livro from '../Livro';
import NotFound from '../NotFound';

export default function Home({livros}) {
    const {title} = useParams();

    return (
        <>
            {livros.map((livro, index) => (
                <div className='card' key={index}>
                    <div className='thumb'>
                        <img src={`imagens/capas/${livro.id}.jpg`} alt={`${livro.titulo}`} />
                    </div>
                    <div className='detalhes'>
                        <h3>{livro.titulo}</h3>
                        <p>{livro.descricao.length > 110 ? livro.descricao.slice(0, 110).concat('...') : livro.descricao}</p>
                        <span><Link to={`/livro/${livro.slug}`} onClick={value => {
                            const livro = livros.find(livro => title === livro.slug);
                            if (livro) return <Livro livro={livro}/>
                            else return <NotFound/>
                        }}>Leia mais &gt;</Link></span>
                    </div>
                </div>
            ))}
        </>
    )
}


/* 

<h2>Últimos Lançamentos</h2>
        <div className="card">
            <p>Conteúdo da Home Page</p>
        </div>


##################################################

onClick={value => { //${livro.slug}
                            const livro = data.find(livro => value.match.params.livroSlug === livro.slug); //livro.slug === li.match.params.id
                            if (livro) return <Livro livro={livro}/>
                            else return <NotFound/>
                        }}

*/
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import NotFound from './NotFound';

export default function Livro(props) {
    const { title } = useParams();
    const [val, setVal] = useState([]);

    useEffect(() => {
        setVal(props.livros);
    }, [props.livros])

    return (
        <>
            {
                val.filter(eq => eq.slug === title)
                    .map((val, index) => (
                        <main className='principal' key={index}>
                            <div className="pag-livro">
                                <h2>{val.titulo}</h2>
                                <div className="livro">
                                    <img src={`/imagens/capas/${val.id}.jpg`} alt={val.titulo} />
                                    <ul>
                                        <li>ISBN: {val.isbn}</li>
                                        <li>Ano: {val.ano}</li>
                                        <li>Páginas: {val.paginas}</li>
                                        <li>Preço: R$ {val.preco}.00</li>
                                    </ul>
                                    <hr />
                                    <h3>Descrição do livro</h3>
                                    <p>{val.descricao}</p>
                                </div>
                            </div>
                        </main>
                    ))
            }
        </>
    )
}

/* 

.map( (val, index) => (
                    <main className='principal' key={index}>
                        <div className="pag-livro">
                            <h2>{val.titulo}</h2>
                            <div className="livro">
                                <img src={`/imagens/capas/${val.id}.jpg`} alt={val.titulo} />
                                <ul>
                                    <li>ISBN: {val.isbn}</li>
                                    <li>Ano: {val.ano}</li>
                                    <li>Páginas: {val.paginas}</li>
                                    <li>Preço: R$ {val.preco}.00</li>
                                </ul>
                                <hr />
                                <h3>Descrição do livro</h3>
                                <p>{val.descricao}</p>
                            </div>
                        </div>
                    </main>
                ))


*/


/* 


livros.find((l, i) => l.slug === title).map((val, index) => (
                    <main className='principal' key={index}>
                        <div className="pag-livro">
                            <h2>{val.titulo}</h2>
                            <div className="livro">
                                <img src={`/imagens/capas/${val.id}.jpg`} alt={val.titulo} />
                                <ul>
                                    <li>ISBN: {val.isbn}</li>
                                    <li>Ano: {val.ano}</li>
                                    <li>Páginas: {val.paginas}</li>
                                    <li>Preço: R$ {val.preco}.00</li>
                                </ul>
                                <hr />
                                <h3>Descrição do livro</h3>
                                <p>{val.descricao}</p>
                            </div>
                        </div>
                    </main>
                ))

*/
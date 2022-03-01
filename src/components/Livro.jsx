import React from 'react'
import { useParams } from 'react-router-dom'
import NotFound from './NotFound';

export default function Livro(props) {
    const { title } = useParams();
    const livro = props.livros.find(livro => livro.slug === title);

    return (
        <div>
            {
                livro ?
                <main className='principal'>
                    <div className="pag-livro">
                        <h2>{livro.titulo}</h2>
                        <div className="livro">
                            <img src={`/imagens/capas/${livro.id}.jpg`} alt={livro.titulo} />
                            <ul>
                                <li>ISBN: {livro.isbn}</li>
                                <li>Ano: {livro.ano}</li>
                                <li>Páginas: {livro.paginas}</li>
                                <li>Preço: R$ {livro.preco}.00</li>
                            </ul>
                            <hr />
                            <h3>Descrição do livro</h3>
                            <p>{livro.descricao}</p>
                        </div>
                    </div>
                </main>
                : <NotFound/>
            }
        </div>
    )
}

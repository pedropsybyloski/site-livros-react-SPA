import React, { useEffect, useState } from 'react';
import { Routes, Route, useParams } from 'react-router-dom';
import Home from './layout/Home';
import Frontend from './Frontend';
import Programacao from './Programacao';
import Design from './Design';
import Catalogo from './Catalogo';
import NotFound from './NotFound';
import Livro from './Livro';

export default function Main() {
  const [data, setData] = useState([]);

  useEffect(async () => {
    await fetch('/api/todosOsLivros.json')
      .then(res => res.json())
      .then(data => setData(data))
      .catch(err => console.log(err));
  }, []);

  /* useEffect(()=>{
    setValor(id);
  }, []) */

  return (
    <main className='principal'>
      <Routes>
        <Route path='/' element={<Home livros={data} />}></Route>
        <Route path='/frontend' element={<Frontend livros={data} />}></Route>
        <Route path='/programacao' element={<Programacao livros={data} />}></Route>
        <Route path='/design' element={<Design livros={data} />}></Route>
        <Route path='/catalogo' element={<Catalogo livros={data} />}></Route>

        <Route path={`/livro/:title`} element={<Livro livros={data} />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
    </main>
  )
}


/* 

<Route path={`/livro/:slugLivro`} element={
            props => {
              const livros = data.find(livro => livro.slug === props.match.params.livroSlug);
              if(livros) return <Livro livro={livros}/>;
              else return <NotFound/>
            }
          }></Route>


*/
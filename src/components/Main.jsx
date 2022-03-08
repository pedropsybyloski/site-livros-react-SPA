import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';
import Home from './layout/Home';
import Frontend from './Frontend';
import Programacao from './Programacao';
import Design from './Design';
import Catalogo from './Catalogo';
import NotFound from './NotFound';
import Livro from './Livro';

export default function Main() {
  const [dados, setDados] = useState([]);

  useEffect(async () => {
    await fetch('../../../api/todosOsLivros.json')
      .then( res => res.json())
      .then( livros => setDados(livros))
      .catch( err => console.log(err));
  }, []);

  return (
    <main className='principal'>
      <Routes>
        <Route path='/' element={<Home livros={dados} />}></Route>
        <Route path='/frontend' element={<Frontend livros={dados} />}></Route>
        <Route path='/programacao' element={<Programacao livros={dados} />}></Route>
        <Route path='/design' element={<Design livros={dados} />}></Route>
        <Route path='/catalogo' element={<Catalogo livros={dados} />}></Route>
        <Route path={`/livro/:title`} element={<Livro livros={dados}/>}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
    </main>
  )
}
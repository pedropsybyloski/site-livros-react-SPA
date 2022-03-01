import React from 'react';
import { Link } from "react-router-dom";

export default function Menu() {
    return (
        <ul>
            <li><Link to='/' exact='true'>Home</Link></li>
            <li><Link to='/frontend' exact='true'>Frontend</Link></li>
            <li><Link to='/programacao' exact='true'>Programação</Link></li>
            <li><Link to="/design" exact='true'>Design</Link></li>
            <li><Link to="/catalogo" exact='true'>Catálogo</Link></li>
        </ul>
    )
}
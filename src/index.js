import React from 'react';
import ReactDOMClient from 'react-dom/client';
import './index.css';
import {App} from './App';
import {Practica} from '../src/Practica/Practica';



const root = document.getElementById("root");
const container = ReactDOMClient.createRoot(root);
container.render(<App />);

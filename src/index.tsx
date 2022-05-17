import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>

    <article id='container'>
      <h1>HAJ</h1>

      <ul>
        <li>Angel Shark</li>
        <li>Hammerhead shark</li>
        <li>Great White Shark</li>
        <li>Bull Shark</li>
      </ul>

    </article>  </React.StrictMode>
);
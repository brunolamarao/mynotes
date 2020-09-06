import React from 'react';
import Note from './components/Note';
import data from './data/notes';
import logo from './images/logo.jpg';
import './App.css';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="BL - Bruno Lamarão" />
        <div class="summary">
          <h1>
            A collection of my dev notes.
          </h1>
          <p>This site is intended to be a repository of my dev notes, but not only that.<br />
            It's also my personal lab where I experiment with different technologies.<br />
            Hopefully the notes will help others in search for a answer. Enjoy!</p>
        </div>
        <div class="rodape">
          <h3>Bruno Lamarão</h3>
          <a
            className="App-link"
            href="https://www.linkedin.com/in/brunolamarao/"
            target="_blank"
            rel="noopener noreferrer"
          >
            About me
        </a>
        </div>
      </header >
      <content>
        {
          data.map((note) => {
            return (
              <Note title={note.title} noteText={note.content} />
            );
          })
        }
      </content>
    </div >
  );
}

export default App;

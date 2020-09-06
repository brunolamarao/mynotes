import React from 'react';
import Note from './components/note';
import data from './data/notes';
import logo from './images/logo.jpg';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      notes: []
    }
  }

  componentDidMount() {
    fetch("http://localhost:5000/Notes")
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result);
          this.setState({
            notes: result
          });
        },
        (error) => {
          console.log(error);
        }
      )
  }

  render() {
    const { notes } = this.state;
    return (

      <div className="App" >
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
            notes.map((note) => {
              return (
                <Note title={note.title} noteText={note.content} />
              );
            })
          }
        </content>
      </div >
    );
  }
}

export default App;

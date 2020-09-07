import React from 'react';
import Note from './components/note';
import materializeCss from 'materialize-css/dist/css/materialize.css';
import M from 'materialize-css';
import data from './data/notes';
import logo from './images/logo.jpg';
import './css/App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      notes: []
    }
  }

  componentDidMount() {
    M.AutoInit();
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
          <div className="summary">
            <h2>
              A collection of my dev notes.
            </h2>
            <p>This site is intended to be a repository of my dev notes, but not only that.<br />
              It's also a space where I experiment with different technologies.<br />
              Hopefully, the notes will help others in search of an answer. Enjoy!</p>
          </div>
          <div className="rodape">
            <h4>Bruno Lamarão</h4>
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
          <div className="row">
            {
              notes.map((note) => {
                return (
                  <Note title={note.title} noteText={note.content} />
                );
              })
            }
          </div>
        </content>
      </div >
    );
  }
}

export default App;

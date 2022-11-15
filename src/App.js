import English from './lang/en.json'
import Spanish from './lang/es.json'
import './App.css';

const locate = navigator.language || 'en';
const lang = (locate==='es') ? Spanish : English;

function App() {
  console.log(lang)
  return (
    <div className="App">
      <header className="App-header">
        <h1>{lang['app.header']}</h1>
        <p>{lang["app.subhead"]}</p>        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

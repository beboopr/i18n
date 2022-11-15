import { useState, createContext } from 'react';
import Details from './component/Details';
import English from './lang/en.json'
import Spanish from './lang/es.json'
import './App.css';

const locale = navigator.language || 'en';
const _lang = (locale==='es') ? Spanish : English;


export const languageContext = createContext()

function App() {
  const [lang, setLang] = useState(_lang)
  return (
    <languageContext.Provider value={{ lang }}>
    <div className="App">
      <header className="App-header">
       <div>
        <button onClick={() => setLang(English)}>EN</button>
        <button onClick={() => setLang(Spanish)}>ES</button>
        </div>
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
        <Details/>
      </header>
    </div>
        </languageContext.Provider>
  );
}

export default App;

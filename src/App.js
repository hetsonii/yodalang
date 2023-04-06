import React, { useState } from 'react';
import './App.css';

function App() {

  const [englishSentence, setEnglishSentence] = useState('');
  const [yodaSentence, setYodaSentence] = useState('');

  function translateToYoda() {
    fetch(`https://api.funtranslations.com/translate/yoda.json?text=${encodeURIComponent(englishSentence)}`)
      .then(response => response.json())
      .then(data => setYodaSentence(data.contents.translated))
      .catch(error => console.error(error));
  }

  return (
    <div>
      <h1>Yoda Translator</h1>
      <label>
        Enter an English sentence:
        <input type="text" value={englishSentence} onChange={event => setEnglishSentence(event.target.value)} />
      </label>
      <button onClick={translateToYoda}>Translate to Yoda</button>
      <p>{yodaSentence}</p>
    </div>
  );
}

export default App;

import { useState } from 'react';
import './App.css';

function App() {

  const [searchWord, setSearchWord] = useState("");
  const [meaning, setMeaning] = useState("");
  const [dictionary, setDictionary] = useState(
    [
      { word: "React", meaning: "A JavaScript library for building user interfaces." },
      { word: "Component", meaning: "A reusable building block in React." },
      { word: "State", meaning: "An object that stores data for a component." }
    ]
  );

  const handleSearch = () => {
    const wordMeaning = dictionary.find((wordObj) => searchWord.toLowerCase() === wordObj.word.toLowerCase());  // returns an object
    if(wordMeaning) {
      setMeaning(wordMeaning.meaning);
    } else {
      setMeaning("Word not found in the dictionary.");
    }
  }
  // if the dictionary data is large, we can call this handleSearch inside useEffect()
  return (
    <div className="App">
      <h1>Dictionary App</h1>
      <input type='text' value={searchWord} onChange={(e) => setSearchWord(e.target.value)} placeholder='Search for a word...'/>
      <button onClick={handleSearch}>Search</button>
      <h3>Definition:</h3>
      <p>{meaning}</p>
    </div>
  );
}

export default App;

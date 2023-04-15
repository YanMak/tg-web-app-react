import { useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';

import {useTelegram} from "./hooks/useTelegram";

function App() {
  const {onToggleButton, tg} = useTelegram();

  useEffect(() => {
      tg.ready();
      console.log(`tg.ready();`)
      console.log(tg)
  }, [])

  return (
    <div className="App">
      work!!!!
      <Header/>
      <button onClick={onToggleButton}>toggle</button>
    </div>
  );
}

export default App;

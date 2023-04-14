import { useEffect } from 'react';
import './App.css';

import {useTelegram} from "./hooks/useTelegram";

function App() {
  const {onToggleButton, tg} = useTelegram();

  const onClose = () => {
    tg.close();
  }

  useEffect(() => {
      tg.ready();
      console.log(`tg.ready();`)
      console.log(tg)
  }, [])

  return (
    <div className="App">
      work!!!
      <button onClick={()=>onClose()}>Закрыть</button>
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import './App.css';

const App: React.FC = () => {
  const [aktívGomb, állítsdBeAktívGombot] = useState<number>(1); 
  const [bemenetiSzöveg, állítsdBeBemenetiSzöveget] = useState<string>('');
  const [celsius, állítsdBeCelsiust] = useState<number | ''>('');
  const [fahrenheit, állítsdBeFahrenheitet] = useState<number | ''>('');

  const gombKattintás = (index: number) => {
    állítsdBeAktívGombot(index);
  };

  const bemenetiSzövegVáltozás = (event: React.ChangeEvent<HTMLInputElement>) => {
    állítsdBeBemenetiSzöveget(event.target.value);
  };

  const celsiusVáltozás = (event: React.ChangeEvent<HTMLInputElement>) => {
    const érték = event.target.value;
    állítsdBeCelsiust(érték ? Number(érték) : ''); 
    if (érték) {
      állítsdBeFahrenheitet(Number((Number(érték) * 9/5 + 32).toFixed(2))); 
    } else {
      állítsdBeFahrenheitet('');
    }
  };

  const fahrenheitVáltozás = (event: React.ChangeEvent<HTMLInputElement>) => {
    const érték = event.target.value;
    állítsdBeFahrenheitet(érték ? Number(érték) : ''); 
    if (érték) {
      állítsdBeCelsiust(Number(((Number(érték) - 32) * 5/9).toFixed(2))); 
    } else {
      állítsdBeCelsiust('');
    }
  };

  const következőGombKattintás = () => {
    if (aktívGomb < 6) {
      állítsdBeAktívGombot(aktívGomb + 1);
    }
  };

  const előzőGombKattintás = () => {
    if (aktívGomb > 1) {
      állítsdBeAktívGombot(aktívGomb - 1);
    }
  };

  return (
    <div className="App">
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <button onClick={előzőGombKattintás} style={{ marginRight: '10px' }}>
          ⬅️
        </button>
        {[1, 2, 3, 4, 5, 6].map((num) => (
          <button
            key={num}
            onClick={() => gombKattintás(num)}
            style={{
              backgroundColor: aktívGomb === num ? 'black' : 'gray',
              color: 'white',
              margin: '0 5px',
            }}
          >
            {num}
          </button>
        ))}
        <button onClick={következőGombKattintás} style={{ marginLeft: '10px' }}>
          ➡️
        </button>
      </div>
      <br />
      <input
        type="text"
        value={bemenetiSzöveg}
        onChange={bemenetiSzövegVáltozás}
        placeholder="Írj ide..."
      />
      <span>{` Karakterek száma: ${bemenetiSzöveg.length}`}</span>
      <br />
      <div>
        <label>
          Celsius:
          <input
            type="number"
            value={celsius}
            onChange={celsiusVáltozás}
          />
        </label>
        <label>
          Fahrenheit:
          <input
            type="number"
            value={fahrenheit}
            onChange={fahrenheitVáltozás}
          />
        </label>
      </div>
    </div>
  );
};

export default App;

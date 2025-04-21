import { useState, useReducer } from 'react';
import Switch from "react-switch";

import Resume from './components/organisms/Resume';
import FontSettings from './components/organisms/FontSettings';
import reducer, { initialState } from './resumeReducer';
import ThemeContext from './ThemeContext';
import FontContext from './FontContext';
import './App.css';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [isEditMode, setEditMode] = useState(false);
  const [fontSettings, setFontSettings] = useState({ size: 18, weight: 700, color: 'black' });
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className="App">
      <div style={{ float: 'right', display: "flex", gap: '1rem' }}>
        <FontSettings fontSettings={fontSettings} setFontSettings={setFontSettings} />
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <label>Dark Mode</label>
          <Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)} width={50} height={25} />
        </div>
        <button onClick={() => setEditMode(!isEditMode)}>{isEditMode ? "Close" : "Edit"}</button>
      </div>
      <ThemeContext.Provider value={darkMode ? "dark" : "light"}>
        <FontContext.Provider value={{ fontSize: `${fontSettings.size}px`, fontColor: fontSettings.color, fontWeight: fontSettings.weight }}>
          <Resume data={state.resumeData} dispatch={dispatch} isEditMode={isEditMode} />
        </FontContext.Provider>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;

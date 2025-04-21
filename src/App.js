import { useState, useReducer } from 'react';
import Resume from './components/organisms/Resume';
import reducer, { initialState } from './resumeReducer';
import './App.css';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  // const [resumeData, setResumeData] = useState(resumeDataOg);
  const [isEditMode, setEditMode] = useState(false);

  return (
    <div className="App">
      <button style={{ float: 'right' }} onClick={() => setEditMode(!isEditMode)}>{isEditMode ? "Close" : "Edit"}</button>
      <Resume data={state.resumeData} dispatch={dispatch} theme='dark' isEditMode={isEditMode} />
    </div>
  );
}

export default App;

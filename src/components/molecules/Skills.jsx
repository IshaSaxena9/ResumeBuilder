import React, { useState } from 'react'

const Skills = ({ data, setData, isEditMode }) => {
  const [skill, setSkill] = useState('');
  const [editable, setEditable] = useState(new Array(data.skills.length).fill(false));
  const [currSkill, setCurrSkill] = useState('');

  function handleAddSkill(e) {
    e.preventDefault();
    setData({ type: 'ADD_SKILL', payload: skill });
    setSkill('');
  }

  function handleDeleteSkill(item) {
    setData({ type: 'DELETE_SKILL', payload: item });
  }

  function handleUpdate(item, index) {
    if (editable[index]) {
      setData({ type: 'UPDATE_SKILL', payload: {item: currSkill, index} })
      const newState = [...editable];
      newState[index] = false;
      setEditable(newState);
      setCurrSkill('');
    } else {
      const newState = [...editable];
      newState[index] = true;
      setEditable(newState);
      setCurrSkill(item);
    }
  }

  return (
    <div>
      <h3>Skills</h3>
      <ul>
        {data.skills.slice(0, 5).map((i, idx) => <li key={i}>
          {editable[idx] ? <input type="text" value={currSkill} onChange={e => setCurrSkill(e.target.value)} /> : i}
          {isEditMode && (
            <>
              <button onClick={() => handleUpdate(i, idx)}>{editable[idx] ? "Save" : "Update"}</button>
              <button onClick={() => handleDeleteSkill(i)}>Delete</button>
            </>
          )}
        </li>)}
      </ul>
      {isEditMode && (
        <form>
          <input type="text" value={skill} onChange={(e) => setSkill(e.target.value)} placeholder="Skill" />
          <button onClick={handleAddSkill}>+</button>
        </form>
      )}
    </div>
  )
}

export default Skills
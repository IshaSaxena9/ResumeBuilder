import React, { useContext, useState } from 'react'
import FontContext from '../../FontContext';

const Education = ({ data, setData, isEditMode }) => {
  const { fontSize, fontColor, fontWeight} = useContext(FontContext);
  
  const [edu, setEdu] = useState('');
  const [editable, setEditable] = useState(new Array(data.education.length).fill(false));
  const [currSkill, setCurrSkill] = useState('');

  function handleAddEducation(e) {
    e.preventDefault();
    setData({ type: 'ADD_EDUCATION', payload: edu });
    setEdu('');
  }

  function handleDeleteEducation(item) {
    setData({ type: 'DELETE_EDUCATION', payload: item });
  }

  function handleUpdate(item, index) {
    if (editable[index]) {
      setData({ type: 'UPDATE_EDUCATION', payload: {item: currSkill, index} })
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
      <h3 style={{ fontSize, color: fontColor, fontWeight }}>Education</h3>
      <ul>
        {data.education.slice(0, 5).map((i, idx) => <li key={i}>
          {editable[idx] ? <input type="text" value={currSkill} onChange={e => setCurrSkill(e.target.value)} /> : i}
          {isEditMode && (
            <>
              <button onClick={() => handleUpdate(i, idx)}>Update</button>
              <button onClick={() => handleDeleteEducation(i)}>Delete</button>
            </>
          )}
        </li>)}
      </ul>
      {isEditMode && (
        <form>
          <input type="text" value={edu} onChange={(e) => setEdu(e.target.value)} placeholder="Education" />
          <button onClick={handleAddEducation}>+</button>
        </form>
      )}
    </div>
  )
}

export default Education
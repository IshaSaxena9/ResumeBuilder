import React, { useContext, useState } from 'react'
import FontContext from '../../FontContext';

const Experience = ({ data, setData, isEditMode }) => {
  const { fontSize, fontColor, fontWeight} = useContext(FontContext);

  const [exp, setExp] = useState({ year: '', company: '', role: '' });

  function handleAddExp(e) {
    e.preventDefault();
    setData({ type: 'ADD_EXPERIENCE', payload: { ...exp, id: data.experience.length + 1 } });
    setExp({ year: '', company: '', role: '' });
  }

  function handleDeleteExp(item) {
    setData({ type: 'DELETE_EXPERIENCE', payload: item });
  }

  return (
    <div>
      <h3 style={{ fontSize, color: fontColor, fontWeight }}>Experience</h3>
      <ul>
        {data.experience.slice(0, 5).map(i => <li key={i.id}>
          {i.role} at {i.company} - {i.year}
          {isEditMode && <button onClick={() => handleDeleteExp(i)}>Delete</button>}
        </li>)}
      </ul>
      {isEditMode && (
        <form>
          <input type="number" value={exp.year} onChange={(e) => setExp({ ...exp, year: e.target.value })} placeholder="Year" />
          <input type="text" value={exp.company} onChange={(e) => setExp({ ...exp, company: e.target.value })} placeholder="Company" />
          <input type="text" value={exp.role} onChange={(e) => setExp({ ...exp, role: e.target.value })} placeholder="Role" />
          <button onClick={handleAddExp}>+</button>
        </form>
      )}
    </div>
  )
}

export default Experience
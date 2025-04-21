import React from 'react'
import Skills from '../molecules/Skills'
import Education from '../molecules/Education'
import Experience from '../molecules/Experience'

const Resume = ({ data, theme, dispatch, isEditMode }) => {
    function handlePrint() {
        window.print();
    }

    return (
        <div style={{ backgroundColor: theme === 'light' ? '#F0F0F0' : '#D0D0D0' }}>
            <h2>Resume</h2>
            <button onClick={handlePrint}>Print</button>
            {data.skills.length > 0 && <Skills data={data} setData={dispatch} isEditMode={isEditMode} />}
            {data.education.length > 0 && <Education data={data} setData={dispatch} isEditMode={isEditMode} />}
            {data.experience.length > 0 && <Experience data={data} setData={dispatch} isEditMode={isEditMode} />}
        </div>
    )
}

export default Resume
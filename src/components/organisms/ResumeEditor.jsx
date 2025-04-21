import React, { useState } from 'react'

const ResumeEditor = ({ data, setData }) => {
    // const [skill, setSkill] = useState('');
    // const [education, setEducation] = useState('');
    // const [exp, setExp] = useState({ year: '', company: '', role: '' });

    // function handleAddSkill(e) {
    //     e.preventDefault();
    //     setData({ ...data, skills: [...data.skills, skill] });
    //     setSkill('');
    // }

    // function handleAddEducation(e) {
    //     e.preventDefault();
    //     setData({ ...data, education: [...data.education, education] });
    //     setEducation('');
    // }

    // function handleAddExp(e) {
    //     e.preventDefault();
    //     setData({ ...data, experience: [...data.experience, { ...exp, id: data.experience.length + 1 }] });
    //     setExp({ year: 0, company: '', role: '' });
    // }

    return (
        <form>
            {/* <section>
                <div>Add new Skills</div>
                <input type="text" value={skill} onChange={(e) => setSkill(e.target.value)} placeholder="Skill" />
                <button onClick={handleAddSkill}>+</button>
            </section> */}
            {/* <section>
                <div>Add new Education</div>
                <input type="text" value={education} onChange={(e) => setEducation(e.target.value)} placeholder="Education" />
                <button onClick={handleAddEducation}>+</button>
            </section> */}
            {/* <section>
                <div>Add new Experience</div>
                <input type="number" value={exp.year} onChange={(e) => setExp({ ...exp, year: e.target.value })} placeholder="Year" />
                <input type="text" value={exp.company} onChange={(e) => setExp({ ...exp, company: e.target.value })} placeholder="Company" />
                <input type="text" value={exp.role} onChange={(e) => setExp({ ...exp, role: e.target.value })} placeholder="Role" />
                <button onClick={handleAddExp}>+</button>
            </section> */}
        </form>
    )
}

export default ResumeEditor
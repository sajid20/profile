import React from 'react'

function Skills() {
    const skillsData = [
        {
            skill: "HTML 5",
            proficiency: "80",
        },
        {
            skill: "CSS 3",
            proficiency: "90",
        },
        {
            skill: "JAVASCRIPT",
            proficiency: "80",
        },
        {
            skill: "PHOTOSHOP",
            proficiency: "60",
        },
        {
            skill: "BOOTSTRAP",
            proficiency: "60",
        },
        {
            skill: "GIT",
            proficiency: "80",
        },
        {
            skill: "REACTJS",
            proficiency: "80",
        },
        {
            skill: "FIGMA",
            proficiency: "80",
        },
    ]
  return (
    <section className='skills'>
      <div className="container">
        <h2>Skills</h2>
        <ul>
            {skillsData.map((skill,ind) => (
                <li key={ind}>
                    <p>{skill.skill}</p>
                    <div className="progress-bar">
                        <div className='progress' style={{width: skill.proficiency+"%"}}></div>
                    </div>
                    <p className='percentage'>{skill.proficiency}%</p>
                </li>
            ))}
        </ul>
      </div>
    </section>
  )
}

export default Skills

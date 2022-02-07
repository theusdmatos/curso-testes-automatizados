/* eslint-disable jsx-a11y/anchor-is-valid */
import './App.css';
import { useState } from 'react';

const App = () => {

  const [skillData, setSkillData] = useState({
    "skillName": "",
    "developers": [],
    "profile": {
      "technologies": [],
      "roles": []
    }
  });
  const [skillsData, setSkillsData] = useState([{
    "skillName": "",
    "developers": [],
    "profile": {
      "technologies": [],
      "roles": []
    }
  }]);

  const [showSkill, setShowSkill] = useState(false);
  const [showSkills, setShowSkills] = useState(false);

  let listSkills = skillsData.map((skill, index) =>
    <ul key={index}>
      <li>Skill Name: {skill.skillName}</li>
      <li>Developers:
        <ul>
          <li>{skill.developers[0]}</li>
          <li>{skill.developers[1]}</li>
        </ul>
      </li>
      <li>Technologies:
        <ul>
          <li>{skill.profile.technologies[0]}</li>
          <li>{skill.profile.technologies[1]}</li>
        </ul>
      </li>
    </ul>);

  let name = <><h3>{skillData.skillName}</h3>
    <ul>
      <li>Skill Name: {skillData.skillName}</li>
      <li>Developers:
        <ul>
          <li>{skillData.developers[0]}</li>
          <li>{skillData.developers[1]}</li>
        </ul>
      </li>
      <li>Technologies:
        <ul>
          <li>{skillData.profile.technologies[0]}</li>
          <li>{skillData.profile.technologies[1]}</li>
        </ul>
      </li>
    </ul></>;

// Chamada na API para trazer os dados das skills 

function loadSkill() {
    setShowSkill(true);
    setShowSkills(false);
    fetch('https://61e4d942595afe00176e51cb.mockapi.io/api/v1/skill')
      .then(response => response.json())
      .then(data => {
        setSkillData(data[0]);
      });
  }
  function loadSkills() {
    setShowSkill(false);
    setShowSkills(true);
    fetch('https://61e4d942595afe00176e51cb.mockapi.io/api/v1/skills')
      .then(response => response.json())
      .then(data => {
        setSkillsData(data);
      });
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Developers App
        </h1>
      </header>
      <label htmlFor="input1">Skill Name</label>
      <input id="input-skill" className='input1'></input>
      <label htmlFor="input1">Developers</label>
      <input id="input-skill2" className='input1'></input>
      <label htmlFor="input1">Technologies</label>
      <input id="input-skill2" className='input1'></input>
      <label htmlFor="input1">Roles</label>
      <input id="input-skill2" className='input1'></input>
      <a id="search-button" className="button2" onClick={() => loadSkill()}>Add Skill</a>
      <a id="load-skills-button" className="button1" onClick={() => loadSkills()}>Add Skills</a>
      {showSkill ? name : ''}
      {showSkills ? listSkills : ''}
    </div>
  );
}

export default App;

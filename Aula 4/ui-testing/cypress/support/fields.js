/// <reference types="cypress" />

const fields = {
    TITLE: {
        developersApp: 'h1',
        skillName: '.App > :nth-child(2)',
        developers: '.App > :nth-child(4)',
        technologies: '.App > :nth-child(6)',
        roles: '.App > :nth-child(8)',
    },
    
    TEXT: {
        skillNameText: '#input-skill',
        developersText: '.App > :nth-child(5)',
        technologiesText: '.App > :nth-child(7)',
        rolesText: '.App > :nth-child(9)',
    },

    BOTTON: {
        addSkills: '#load-skills-button',
    }
}
export default fields
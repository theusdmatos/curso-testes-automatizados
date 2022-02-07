describe('App Developers Skills', () => {

    beforeEach(() => {
        cy.accessWebSite();
    });
    it('should load skills list as the button is clicked', () => {
        cy.get(field.BUTTON.addSkills).click();
        cy.get('li').should('be.visible');
        cy.get('ul').should('be.visible');
    });
    it('should load one skill after input and click search button', () => {
        cy.get(field.TEXT.skillNameText).type('front-end');
        cy.get(field.BUTTON.addSkills).click();
        cy.get('li').should('be.visible');
        cy.contains('Skill Name: front-end');
    });
    it('should load one skill after input with custom command', () => {
        cy.get(field.TEXT.skillNameText).type('front-end');
        cy.clickButton('Add Skills');
        cy.get('li').should('be.visible');
        cy.contains('Skill Name: front-end');
    });

    it('should load skills list as the button is clicked', () => {
        cy.get(field.BUTTON.addSkills).click()
        cy.get('li').should('be.visible')
        cy.get('ul').should('be.visible')
    });
    it('titles', () => {
        cy.get(field.TITLE.developersApp).should('have.text', 'Developers App')
        cy.get(field.TITLE.skillName).should('have.text', 'Skill Name')
        cy.get(field.TITLE.developers).should('have.text', 'Developers')
        cy.get(field.TITLE.technologies).should('have.text', 'Technologies')
        cy.get(field.TITLE.roles).should('have.text', 'Roles')
    })
    it('fields', () => {
        cy.writeFields()
    })
    it('buttons', () => {
        cy.get(field.BUTTON.addSkills).should('be.visible')
        cy.get(field.BUTTON.addSkills).should('have.text', 'Add Skills')
        cy.get(field.BUTTON.addSkills).click()
    })
});
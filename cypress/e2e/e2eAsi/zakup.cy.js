describe('Dodanie nowego użytkownika do OrangeHRM', () => {
    beforeEach(() => {
        cy.loginToOrangeHRM();  // Metoda logowania, która musi być zdefiniowana
    });

    it('Przechodzi na stronę systemowych użytkowników i dodaje nowego użytkownika', () => {
        // Przejdź na stronę systemowych użytkowników

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers');

        // Zweryfikuj, że strona systemowych użytkowników jest widoczna
        cy.contains('System Users', {timeout: 10000}).should('be.visible');

        // Kliknij przycisk "Add"
        cy.clickButton('.orangehrm-header-container > .oxd-button')
        // cy.pause
        // // Poczekaj, aż dropdowny staną się widoczne
        cy.get('.oxd-select-text-input', {timeout: 10000}).should('be.visible');
        // cy.addUser('ESS', 'Enabled', 'Test123', 'Test123');
    })
});

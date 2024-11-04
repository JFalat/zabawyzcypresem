describe('Dodanie nowego użytkownika do OrangeHRM', () => {
    beforeEach(() => {
        cy.loginToOrangeHRM();  // Metoda logowania, która musi być zdefiniowana
    });

    it('Przechodzi na stronę systemowych użytkowników i dodaje nowego użytkownika', () => {
        // Przejdź na stronę systemowych użytkowników

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers');

        // Zweryfikuj, że strona systemowych użytkowników jest widoczna
        cy.contains('System Users', { timeout: 10000 }).should('be.visible');

        // Kliknij przycisk "Add"
        cy.clickButton('.orangehrm-header-container > .oxd-button')

        // Poczekaj, aż dropdowny staną się widoczne
        cy.get('.oxd-select-text-input', { timeout: 10000 }).should('be.visible');

        // Wpisanie User Role
        cy.selectFromDropdown(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text','Admin')

        // Wybór statusu (Enabled/Disabled)
        cy.selectFromDropdown(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text', 'Enabled');

        // Wpisanie Employee Name
        cy.enterText('.oxd-autocomplete-text-input > input','%')
        cy.wait(10000);  // Daj czas na pojawienie się sugestii
        cy.selectFirstFromDropdown2('class="class="oxd-autocomplete-wrapper"')//test
        //Wpisanie UserName
        const randomText = Math.random().toString(36).substring(7);  // Generuje losowy ciąg znaków
        cy.enterText(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input', randomText)

        // Wpisz hasło "Admin123"
        cy.enterText('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input','Admin123')

        // Potwierdź hasło
        cy.enterText(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input','Admin123')

        // // Save
        // cy.get('.oxd-button--secondary').click()
    });
});

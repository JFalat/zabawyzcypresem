describe('Dodanie nowego użytkownika do OrangeHRM', () => {
    beforeEach(() => {
        cy.loginToOrangeHRM();  // Metoda logowania
    });

    it('Przechodzi na stronę systemowych użytkowników i dodaje nowego użytkownika', () => {
        // Przejdź na stronę systemowych użytkowników
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers');

        // Zweryfikuj, że strona systemowych użytkowników jest widoczna
        cy.contains('System Users').should('be.visible');

        // Kliknij przycisk "Add"
        cy.get('button[class*="oxd-button--secondary"]').first().click();

        // Poczekaj, aż dropdowny staną się widoczne
        cy.get('.oxd-select-text-input', { timeout: 10000 }).should('be.visible');

        // Wybór roli użytkownika (Admin)
        cy.get('div.oxd-select-text').first().click();  // Otwórz dropdown dla roli użytkownika
        cy.contains('Admin').click();  // Wybierz "Admin"

        // Wybór statusu (Enabled/Disabled)
        cy.get('div.oxd-select-text').eq(1).click();  // Otwórz dropdown dla statusu
        cy.contains('Enabled').click();  // Wybierz "Enabled"

        cy.get('.oxd-autocomplete-text-input oxd-autocomplete-text-input--active')
            .type('john  phone', { force: true });

// lsdlfkjsl
    });
});

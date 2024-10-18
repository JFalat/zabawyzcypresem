describe('Dodanie nowego użytkownika do OrangeHRM', () => {
    // Używamy gotowej metody logowania w beforeEach
    beforeEach(() => {
        cy.loginToOrangeHRM();  // Poprawna nazwa metody
    });

    it('Przechodzi na stronę systemowych użytkowników i dodaje nowego użytkownika', () => {
        // Przejdź na stronę systemowych użytkowników
        cy.visitPage('https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers');

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

        // // Wprowadzenie danych nowego użytkownika
        // Wyszukaj element input na podstawie placeholdera i użyj cy.enterText
        cy.enterText('input[placeholder="Type for hints..."]', 'Paul Collings');
        cy.wait(2000);
        cy.get('input[autocomplete="off"]', { timeout: 10000 })
            .eq(0) // Wybiera pierwsze pole
            .should('be.visible')
            .clear()
            .type('wprowadzony tekst');

        // // Wprowadzenie hasła
        cy.enterText('input[name="password"]', 'UserPassword123');  // Hasło
        cy.enterText('input[name="confirmPassword"]', 'UserPassword123');  // Potwierdzenie hasła
        //
        // // Zapisanie nowego użytkownika
        // cy.clickButton('button[type="submit"]');  // Przycisk "Save"
        //
        // // Sprawdzenie komunikatu o sukcesie
        // cy.contains('Successfully Saved').should('be.visible');
    });
});

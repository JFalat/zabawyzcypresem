describe('Admin Page Test - Select REST API and Submit', () => {
    it('Should select REST API and submit the form', () => {
        // Otwórz stronę administracyjną Parabank
        cy.visit('https://parabank.parasoft.com/parabank/admin.htm');

        // Znajdź dropdown i wybierz opcję REST API
        cy.get('#soapEndpoint').select('REST');

        // Sprawdź, czy opcja REST jest wybrana
        cy.get('#soapEndpoint').should('have.value', 'REST');

        // Znajdź przycisk Submit i kliknij go
        cy.get('input[type="submit"]').click();

        // Dodaj asercję, aby sprawdzić, czy formularz został pomyślnie wysłany
        // Możemy sprawdzić np. obecność komunikatu lub przeładowanie strony
        cy.url().should('include', '/admin.htm');

        // Sprawdź, czy strona pokazuje informację potwierdzającą zmianę (opcjonalnie)
        cy.contains('Settings have been updated.').should('exist');
    });
});

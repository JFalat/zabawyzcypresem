Cypress.Commands.add('addUser', (userRole, status, password, confirmPassword) => {
    // Wybierz User Role
    cy.selectFromDropdown(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text', userRole);

    // Wybierz Status
    cy.selectFromDropdown(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text', status);

    // Wpisz Employee Name i wybierz pierwszą opcję z autouzupełniania
    cy.enterText('.oxd-autocomplete-text-input > input', '%');
    cy.wait(1000);  // Daj czas na pojawienie się sugestii
    cy.get('.oxd-autocomplete-wrapper').first().click(); // Wybór pierwszej opcji

    // Wpisz losowy UserName
    const randomText = Math.random().toString(36).substring(7);
    cy.enterText(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input', randomText);

    // Wpisz hasło
    cy.enterText('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input', password);

    // Potwierdź hasło
    cy.enterText(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input', confirmPassword);

    // Kliknij Save
    cy.get('.oxd-button--secondary').click();
});

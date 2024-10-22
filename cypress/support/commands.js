Cypress.Commands.add('loginToOrangeHRM', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    cy.get('input[name="username"]').type('Admin');
    cy.get('input[name="password"]').type('admin123');
    cy.get('button[type="submit"]').click();
    cy.url().should('include', '/dashboard');
    cy.contains('Dashboard').should('be.visible');
});
Cypress.Commands.add('visitPage', (url) => {
    // Odwiedź przekazany URL
    cy.visit(url);

    // Zweryfikuj, czy URL jest poprawny po przejściu
    cy.url().should('include', url.split('/').pop());
});

Cypress.Commands.add('clickButton', (buttonSelector) => {
    // Kliknięcie przycisku na podstawie selektora
    cy.get(buttonSelector).click();
});

Cypress.Commands.add('enterText', (inputSelector, text) => {
    // Wyszukiwanie pola tekstowego na podstawie selektora i wpisanie tekstu
    cy.get(inputSelector).clear().type(text);
});
// kjfksd
Cypress.Commands.add('clickLink', (linkSelector) => {
    cy.get(linkSelector).click();
});
Cypress.Commands.add('selectFromDropdown', (dropdownSelector, optionText) => {
    // Kliknij dropdown, aby go otworzyć
    cy.get(dropdownSelector).click();

    // Wybierz opcję z dropdowna na podstawie jej tekstu
    cy.get('div[role="listbox"]').contains(optionText).click();
});

Cypress.Commands.add('enterTextToDataVField', (text) => {
    cy.get('input[data-v-75e744cd]')
        .should('be.visible')
        .clear()
        .type(text);

});

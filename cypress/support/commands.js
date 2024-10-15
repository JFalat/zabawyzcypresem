// ***********************************************
Cypress.Commands.add('loginToSauceDemo', (username = 'standard_user', password = 'secret_sauce') => {
    // Wejście na stronę logowania
    cy.visit('https://www.saucedemo.com/');

    // Wprowadzenie nazwy użytkownika
    cy.get('#user-name').clear().type(username);

    // Wprowadzenie hasła
    cy.get('#password').clear().type(password);

    // Kliknięcie przycisku "Login"
    cy.get('#login-button').click();
});

Cypress.Commands.add('clickButton', (buttonSelector) => {
    // Kliknięcie przycisku na podstawie selektora
    cy.get(buttonSelector).click();
});

Cypress.Commands.add('enterText', (inputSelector, text) => {
    // Wyszukiwanie pola tekstowego na podstawie selektora i wpisanie tekstu
    cy.get(inputSelector).clear().type(text);
});

Cypress.Commands.add('clickLink', (linkSelector) => {
    cy.get(linkSelector).click();
});

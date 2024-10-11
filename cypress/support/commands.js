// ***********************************************
Cypress.Commands.add('fillTextField', (fieldSelector, value) => {
    cy.get(fieldSelector)
        .clear()   // Wyczyść pole przed wpisaniem nowej wartości
        .type(value);  // Wpisz nową wartość
});
Cypress.Commands.add('submitForm', (
    firstName,
    lastName,
    street,
    city,
    state,
    zipCode,
    phoneNumber,
    ssn,
    username,
    password,
    repeatedPassword
) => {
    cy.fillTextField('#customer\\.firstName', firstName);
    cy.fillTextField('#customer\\.lastName', lastName);
    cy.fillTextField('#customer\\.address\\.street', street);
    cy.fillTextField('#customer\\.address\\.city', city);
    cy.fillTextField('#customer\\.address\\.state', state);
    cy.fillTextField('#customer\\.address\\.zipCode', zipCode);
    cy.fillTextField('#customer\\.phoneNumber', phoneNumber);
    cy.fillTextField('#customer\\.ssn', ssn);
    cy.fillTextField('#customer\\.username', username);
    cy.fillTextField('#customer\\.password', password);
    cy.fillTextField('#repeatedPassword', repeatedPassword);
});

Cypress.Commands.add('submitCheckbox', (check) => {
    cy.get('#soapEndpoint').select('REST');
});

Cypress.Commands.add('selectFromDropdown', (dropdownSelector, optionValue) => {
    // Pracujemy tylko z elementami <select>
    cy.get(dropdownSelector).should('have.prop', 'tagName', 'SELECT')
        .select(optionValue);  // Wybór opcji na podstawie wartości (value) lub tekstu

});

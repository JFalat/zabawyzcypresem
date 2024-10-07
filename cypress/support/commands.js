// ***********************************************

Cypress.Commands.add('submitForm',(firstName, lastName, street, city,state, zipCode, phoneNumber, ssn, username, password,repeatedPassword) =>{
    cy.get('#customer\\.firstName').type(textField, {force:true});
    cy.get('#customer\\.lastName').type(textField, {force:true});
    cy.get('#customer\\.address\\.street').type(textField, {force:true});
    cy.get('#customer\\.address\\.city').type(textField, {force:true});
    cy.get('#customer\\.address\\.state').type(textField, {force:true});
    cy.get('#customer\\.address\\.zipCode').type(textField, {force:true});
    cy.get('#customer\\.phoneNumber').type(textField, {force:true});
    cy.get('#customer\\.ssn').type(textField, {force:true});

    // Wpisanie losowej nazwy użytkownika
    cy.get('#customer\\.username').type(textField, {force:true});
    cy.get('#customer\\.password').type(textField, {force:true});
    cy.get('#repeatedPassword').type(textField, {force:true});
});
Cypress.Commands.add('submitCheckbox', (check) => {
    cy.get('#soapEndpoint').select('REST');
});

/**
 * Uniwersalna metoda do wyboru wartości z dropdowna
 * @param {string} dropdownSelector - Selector dla dropdowna (select lub input)
 * @param {string} optionValue - Wartość opcji, którą chcesz wybrać (value w select)
 * @param {string} [optionText] - Tekst opcji, którą chcesz wybrać (jeśli element ma opcje jako tekst)
 */
Cypress.Commands.add('selectFromDropdown', (dropdownSelector, optionValue, optionText) => {
    cy.get(dropdownSelector).then($dropdown => {
        const tagName = $dropdown.prop('tagName').toLowerCase();

        if (tagName === 'select') {
            // Dla <select> elementów
            cy.get(dropdownSelector).select(optionValue);
        } else {
            // Dla custom dropdownów
            cy.get(dropdownSelector).click(); // Otwieranie dropdowna

            if (optionText) {
                // Szukaj opcji po tekście
                cy.contains(optionText).click();
            } else {
                // Szukaj opcji po value
                cy.get(`[value="${optionValue}"]`).click();
            }
        }
    });
});

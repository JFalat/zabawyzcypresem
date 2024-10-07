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
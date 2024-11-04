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

Cypress.Commands.add('clickButton', (containerSelector, buttonSelector, index = 0) => {
    // Kliknij przycisk o podanym indeksie, który jest dzieckiem określonego kontenera
    cy.get(`${containerSelector} ${buttonSelector}`).eq(index).click();
});

Cypress.Commands.add('enterText', (inputSelector, text) => {
    // Wyszukiwanie pola tekstowego na podstawie selektora i wpisanie tekstu
    cy.get(inputSelector).clear().type(text);
});
//test
Cypress.Commands.add('selectFromDropdown', (dropdownSelector, optionText) => {
    // Kliknij dropdown, aby go otworzyć
    cy.get(dropdownSelector).first().click();

    // Wybierz opcję z dropdowna na podstawie jej tekstu
    cy.get('div[role="listbox"] option, div.oxd-select-dropdown').click();
});
Cypress.Commands.add('selectFirstFromDropdown2', (dropdownSelector) => {
    // Kliknij dropdown, aby go otworzyć
    cy.get(dropdownSelector).first().click();

    // Znajdź pierwszy element z listy rozwijanej i kliknij go
    cy.get('div[role="listbox"] option, div.oxd-select-dropdown, .oxd-autocomplete-wrapper')
        .find('div, option') // Szuka elementów wewnątrz listy rozwijanej
        .first()
        .should('be.visible')
        .click();
});


Cypress.Commands.add('clickButton', (containerSelector) => {
    // Kliknij przycisk, który jest dzieckiem określonego kontenera
    cy.get(`${containerSelector}`).click();
});
Cypress.Commands.add('enterTextByLabel', (labelText, text) => {
    cy.contains('label', labelText, { timeout: 10000 })  // Zwiększamy timeout
        .should('be.visible')
        .parents('div')
        .find('input', { timeout: 10000 })               // Zwiększamy timeout również dla input
        .should('exist')
        .clear()
        .type(text);
});
// Dodajemy niestandardową komendę do Cypress
Cypress.Commands.add('selectFromListbox', (dropdownSelector, optionText) => {
    // Kliknij dropdown, aby wyświetlić opcje
    cy.get(dropdownSelector).click();

    // Wybierz opcję po jej tekście
    cy.get(`[role='option']`).contains(optionText).click();
});


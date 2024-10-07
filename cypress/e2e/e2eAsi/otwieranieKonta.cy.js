// Blok opisujący grupę testów
describe('Otwieranie nowego konta', () => {

    // Pojedynczy test
    it('powinien otworzyć nowe konto', () => {
        // Po rejestracji otwórz stronę "Open New Account"
        // Oczekiwanie na pełne załadowanie strony lub inny wskaźnik
        cy.wait(2000); // Czeka przez 2 sekundy
        cy.contains('Open New Account').should('be.visible').click().then(() => {
            cy.log('Kliknięto link "Open New Account"');
        });

        // Sprawdzenie, czy strona otwierania nowego konta się otworzyła
        cy.url().should('include', '/openaccount.htm').then(() => {
            cy.log('Przeniesiono na stronę "Open New Account"');
        });

        // Wybór z dropdown listy "Account Type" -> wybieramy "Checking"
        cy.selectFromDropdown('select#type', '1')
            .should('have.value', '1')
            .then(() => {
                cy.log('Wybrano typ konta: Checking');
            });


        // Oczekiwanie na załadowanie opcji w polu "From Account"
        cy.get('select#fromAccountId', { timeout: 10000 }).should('have.length.greaterThan', 0).then(($select) => {
            // Pobranie wszystkich opcji z dropdowna
            const options = $select.find('option');

            // Sprawdzenie, czy są dostępne opcje
            if (options.length > 1) {
                // Wybór pierwszej opcji (indeks 1, bo indeks 0 to placeholder)
                cy.wrap($select).select(options.eq(1).val()).should('not.have.value', '').then(() => {
                    cy.log('Wybrano pierwsze dostępne konto z listy');
                });
            } else {
                throw new Error('Nie znaleziono żadnych opcji w polu From Account');
            }
        });

        // Kliknięcie przycisku do otwarcia nowego konta
        cy.get('input[value="Open New Account"]').click().then(() => {
            cy.log('Kliknięto przycisk otwarcia nowego konta');
        });

        // Sprawdzenie, czy pojawia się potwierdzenie otwarcia konta
        cy.contains('Account Opened!').should('be.visible').then(() => {
            cy.log('Nowe konto zostało otwarte');
        });
    });

});

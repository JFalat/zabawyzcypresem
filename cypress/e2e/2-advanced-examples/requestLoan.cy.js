describe('Testowanie funkcji wnioskowania o pożyczkę w Parabank', () => {
    beforeEach(() => {
        // Odwiedź stronę główną
        cy.visit('http://parabank.parasoft.com/parabank/index.htm');
        cy.log('Odwiedziłem stronę główną');

        // Logowanie użytkownika (wymień poniższe dane na swoje dane logowania)
        cy.get('input[name="username"]').type('joanna123');
        cy.get('input[name="password"]').type('haslo123');
        cy.get('input[value="Log In"]').click();
    });

    it('Powinien złożyć wniosek o pożyczkę', () => {
        // Wejdź na stronę z formularzem wnioskowania o pożyczkę
        cy.contains('Request Loan').click();
        cy.url().should('include', '/requestloan.htm').then(() => {
            cy.log('Przeniesiono na stronę wnioskowania o pożyczkę');
        });

        // Wpisz kwotę pożyczki
        cy.get('input#amount').type('5000').then(() => {
            cy.log('Wpisano kwotę pożyczki: 5000');
        });

        // Wpisz dochód
        cy.get('input#downPayment').type('1000').then(() => {
            cy.log('Wpisano kwotę dochodu: 1000');
        });

        // Wybierz konto z dropdown listy (pierwsza dostępna opcja)
        cy.get('select#fromAccountId').then(($select) => {
            const options = $select.find('option');
            if (options.length > 1) {
                cy.wrap($select).select(options.eq(1).val()).should('not.have.value', '').then(() => {
                    cy.log('Wybrano pierwsze dostępne konto z listy');
                });
            } else {
                throw new Error('Nie znaleziono żadnych opcji w polu From Account');
            }
        });

        // Kliknij przycisk "Apply Now"
        cy.get('input[value="Apply Now"]').click().then(() => {
            cy.log('Kliknięto przycisk wnioskowania o pożyczkę');
        });

        // Sprawdź, czy pożyczka została przyznana
        cy.contains('Loan Request Processed').should('be.visible').then(() => {
            cy.log('Wniosek o pożyczkę został przetworzony');
        });
    });
});

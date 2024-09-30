describe('Testowanie funkcji rejestracji użytkownika', () => {
    beforeEach(() => {
        // Odwiedź stronę główną
        cy.visit('http://parabank.parasoft.com/parabank/');
        cy.log('Odwiedziłem stronę główną');
    });

    function kliknijRegister() {
        // Szuka linku zawierającego tekst "Register" i klika go
        cy.contains('a', 'Register').click().then(() => {
            cy.log('Kliknięto link rejestracji');
        });
    }

    it('Powinien przejść do strony rejestracji, wypełnić formularz i kliknąć "Register"', () => {
        // Użycie funkcji kliknijRegister w teście
        kliknijRegister();

        // Generowanie zrandomizowanej nazwy użytkownika
        const randomUsername = `uzytkownik_${Math.floor(Math.random() * 10000)}`;

        // Sprawdzenie, czy URL zmienił się na stronę rejestracji
        cy.url().should('include', '/register.htm').then(() => {
            cy.log('Przeniesiono na stronę rejestracji');
        });

        // Wypełnianie pól formularza rejestracyjnego
        cy.get('#customer\\.firstName').type('Joanna').then(() => {
            cy.log('Wpisano "Joanna" w pole First Name');
        });

        cy.get('#customer\\.lastName').type('Kowalska').then(() => {
            cy.log('Wpisano "Kowalska" w pole Last Name');
        });

        cy.get('#customer\\.address\\.street').type('Ulica Przykładowa 1').then(() => {
            cy.log('Wpisano adres w pole Address');
        });

        cy.get('#customer\\.address\\.city').type('Warszawa').then(() => {
            cy.log('Wpisano "Warszawa" w pole City');
        });

        cy.get('#customer\\.address\\.state').type('Mazowieckie').then(() => {
            cy.log('Wpisano "Mazowieckie" w pole State');
        });

        cy.get('#customer\\.address\\.zipCode').type('00-001').then(() => {
            cy.log('Wpisano kod pocztowy w pole Zip Code');
        });

        cy.get('#customer\\.phoneNumber').type('123456789').then(() => {
            cy.log('Wpisano numer telefonu w pole Phone #');
        });

        cy.get('#customer\\.ssn').type('123-45-6789').then(() => {
            cy.log('Wpisano SSN w pole SSN');
        });

        // Wpisanie losowej nazwy użytkownika
        cy.get('#customer\\.username').type(randomUsername).then(() => {
            cy.log(`Wpisano nazwę użytkownika "${randomUsername}" w pole Username`);
        });

        cy.get('#customer\\.password').type('haslo123').then(() => {
            cy.log('Wpisano hasło w pole Password');
        });

        cy.get('#repeatedPassword').type('haslo123').then(() => {
            cy.log('Wpisano potwierdzenie hasła w pole Confirm');
        });

        // Kliknięcie przycisku "Register"
        cy.get('input[value="Register"]').click().then(() => {
            cy.log('Kliknięto przycisk rejestracji');
        });

        // Asercja na komunikat o sukcesie
        cy.contains('Your account was created successfully. You are now logged in').should('be.visible').then(() => {
            cy.log('Sprawdzono komunikat o sukcesie');

    //klikanie w logo banku
            cy.get('img[alt="ParaBank"]').click();

        });
    });
});

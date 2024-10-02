describe('Testowanie funkcji rejestracji użytkownika i otwierania nowego konta', () => {
    beforeEach(() => {
        // Odwiedź stronę główną
        cy.visit('http://parabank.parasoft.com/parabank/');
        cy.log('Odwiedziłem stronę główną');
    });

    // Definicja funkcji kliknijRegister
    function kliknijRegister() {
        // Szuka linku zawierającego tekst "Register" i klika go
        cy.contains('a', 'Register').click().then(() => {
            cy.log('Kliknięto link rejestracji');
        });
    }

    it('Powinien zarejestrować użytkownika, otworzyć nowe konto, wybrać "Checking" oraz dynamicznie wybrać konto', () => {
        // Użycie funkcji kliknijRegister w teście
        kliknijRegister();

        // Generowanie zrandomizowanej nazwy użytkownika
        const randomUsername = `uzytkownik_${Math.floor(Math.random() * 10000)}`;

        // Sprawdzenie, czy URL zmienił się na stronę rejestracji
        cy.url().should('include', '/register.htm').then(() => {
            cy.log('Przeniesiono na stronę rejestracji');
        });

        // Wypełnianie pól formularza rejestracyjnego
        it('submitForm',()=>{
            cy.submitForm("Anna","Nowak","street","warsaw", "01-100","999","999888","123","Asia","password","password")
        })

        // Kliknięcie przycisku "Register"
        cy.get('input[value="Register"]').click().then(() => {
            cy.log('Kliknięto przycisk rejestracji');
        });


    });
});

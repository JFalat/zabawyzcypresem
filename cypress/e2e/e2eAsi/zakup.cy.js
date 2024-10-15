describe('Sauce Demo - Add to Cart, Checkout and Complete Order', () => {
    beforeEach(() => {
        // Logowanie przed każdym testem
        cy.loginToSauceDemo();
    });

    it('should add Sauce Labs Backpack to cart, proceed to checkout, click links, and enter details', () => {
        // Dodanie produktu "Sauce Labs Backpack" do koszyka
        cy.clickButton('[data-test="add-to-cart-sauce-labs-backpack"]');

        // Przejście do koszyka
        cy.clickButton('.shopping_cart_link');

        // Sprawdzenie, czy użytkownik został przeniesiony na stronę koszyka
        cy.url().should('include', '/cart.html');

        // Przejście do checkout
        cy.clickButton('[data-test="checkout"]');

        // Sprawdzenie, czy użytkownik został przeniesiony na stronę checkout step one
        cy.url().should('include', '/checkout-step-one.html');

        // Wprowadzenie danych użytkownika w formularzu checkout
        cy.enterText('[data-test="firstName"]', 'John');
        cy.enterText('[data-test="lastName"]', 'Doe');
        cy.enterText('[data-test="postalCode"]', '12345');

        // Kliknięcie przycisku "Continue"
        cy.clickButton('[data-test="continue"]');

        // Sprawdzenie, czy użytkownik został przeniesiony na stronę checkout step two
        cy.url().should('include', '/checkout-step-two.html');

        // Finalizacja zakupu - kliknięcie przycisku "Finish"
        cy.clickButton('[data-test="finish"]');

        // Sprawdzenie, czy użytkownik został przeniesiony na stronę potwierdzenia zamówienia
        cy.url().should('include', '/checkout-complete.html');

        // Oczekiwanie na pojawienie się tekstu potwierdzającego zamówienie
        cy.contains('h2', 'Thank you for your order!', { timeout: 10000 }).should('be.visible');

        // Kliknięcie w trzy kreski, aby otworzyć menu
        cy.clickButton('#react-burger-menu-btn');

        // Wywołanie metody clickLink do kliknięcia w link "About"
        cy.get('#about_sidebar_link').should('be.visible').click({ timeout: 10000 });

        // cy.clickLink('#about_sidebar_link', { timeout: 120000 }).should('be.visible');


    });
});

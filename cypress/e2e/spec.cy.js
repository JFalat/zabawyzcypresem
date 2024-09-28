describe('Testowanie przejścia do strony admina i zaznaczenia kontrolki REST', () => {
  beforeEach(() => {
    // Odwiedź stronę główną
    cy.visit('https://parabank.parasoft.com');
  });

  it('Powinien przejść na stronę administracyjną i zaznaczyć kontrolkę REST w Data Access Mode', () => {
    // Krok 1: Przejdź na stronę administracyjną
    // Zakładam, że istnieje przycisk/link do strony admina. Zastąp selektor odpowiednim dla Twojej aplikacji.
    cy.get('a[href="/admin"]').click(); // Zastąp odpowiednim selektorem

    // Krok 2: Sprawdź, czy strona administracyjna została załadowana
    // Możesz dodać asercję, aby upewnić się, że jesteś na stronie admina
    cy.url().should('include', '/admin');

    // Krok 3: Zaznacz kontrolkę REST w trybie dostępu do danych
    // Zakładam, że kontrolka ma odpowiedni selektor. Zastąp selektor odpowiednim dla Twojej aplikacji.
    cy.get('input[name="dataAccessMode"]').check('REST'); // Zastąp odpowiednim selektorem lub metodą

    // Krok 4: Opcjonalnie, możesz dodać asercję, aby upewnić się, że kontrolka jest zaznaczona
    cy.get('input[name="dataAccessMode"][value="REST"]').should('be.checked');
  });
});

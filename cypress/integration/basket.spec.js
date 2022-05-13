const username = 'mzujevova';
const password = 'M1losMacourek!!!';

describe("Ship-to popup", () => {
    before(() => {
        cy.clearCookies();
        cy.visit('/', {
            auth: {
              username,
              password,
            },
        });
    });
    
    beforeEach(() => {
        Cypress.Cookies.preserveOnce('__RequestVerificationToken');
    });

    it("can open", () => {
        cy.getCookie('__RequestVerificationToken').should('exist')
        // cy.visit('/page?pagename=basket');
        // cy.get('#ShipToPopup0').click();
        // cy.get('#ShipToPopup').should('be.visible');
        
    });
    
    it("populates selects", () => {
        cy.get('#New-Quote').click();
        cy.get('#SelectedTeamId').select('Sales Team');
        cy.get('#SelectedPriceLevelId').should('have.text', 'Current Price\n');
        cy.get('#SelectedCurrencyId').should('have.text', 'USD\n');
        // const maxChildren = Object.keys(cy.get('#Basket_CustomerId').children()).length;
        // cy.get('#Basket_CustomerId').select('ALDI', { force: true });
        // cy.get('#Basket_CustomerId').select(Math.floor(Math.random() * maxChildren - 1));
    });
});
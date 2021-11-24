var elements = require('./elements')
class ResultPage {
    verifyFirstResult(search_keyword) {
        return cy.get(elements.RESULTPAGE.SEARCH_RESULT_FIRST).first().text().then(
            value => {
                cy.log("text is :", value);
                expect(value).to.include(search_keyword);
            }
        );
    }
}

export default ResultPage;

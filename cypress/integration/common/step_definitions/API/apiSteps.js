Given('As a user I want to execute Pokemon GET api for Pokemon {string}', (pokename) => {
    cy.request({
        method: 'GET',
        url: 'https://pokeapi.co.api/v2/pokemon/' + pokename,
        headers: {
            'Content-Type': 'applicationm/json'
        },
        failOnStatusCode: false
    }).as('get_pokemon_data')
});

Then('Verify response status code is {int}', (statusCode) => {
    cy.get('@get_pokemon_data').should((response)=> {
      expect(response.status).to.eq(statusCode);
    })
  });

Then('Verify response details for Pokemon {string}', (pokename) => {
    cy.get('@get_pokemon_data').should((response)=> {
      
      expect(response.body).to.have.property('abilities');
      expect(response.body).to.have.nested.property('forms[0].name',pokename);
      expect(response.body.forms[0]).to.have.property('name',pokename);
      const name = response.body.forms[0].name;
      assert.equal(name, pokename);
      
      expect(response).to.have.property('headers');
    })
  });

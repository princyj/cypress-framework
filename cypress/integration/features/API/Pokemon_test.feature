@API
Feature: Pokemon GET /pokemon/{pokemon_name or id}
@smoke @test
   Scenario: Get data for a pokemon using API and verify it
        Given As a user I want to execute Pokemon GET api for Pokemon "pikachu"
        Then Verify response code is 200
        And Verify response details for Pokemon "pikachu"

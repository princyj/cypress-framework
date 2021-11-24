@UI
Feature: Navigating to Google.com and verifying title
    @smoke @test
    Scenario: Perform Navigation
        Given I open the Google web url
        Then I verify title of web page as 'Google'
        When I provide search query as "Pokemon"
        Then Verify first search result to match "Pokemon" keyword
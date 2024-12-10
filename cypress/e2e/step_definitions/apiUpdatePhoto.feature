Feature: Update Photo via API

Scenario: Successful Update Photo

Given I am logged in as a Admin
When I send a request to update the product image
Then I should receive a response confirming the update
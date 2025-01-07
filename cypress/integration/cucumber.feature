Feature: User Login
  As a user,
  I want to log in to the website,
  So that I can access my account.

  Scenario: Logging in with valid credentials
    Given I open the website
    When I click the mobile no field & password
    Then I see the success message

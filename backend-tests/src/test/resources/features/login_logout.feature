Feature: Login Feature

  @smoke @backend
  Scenario: Valid login
    Given user opens backend app
    When user enters valid credentials
    Then login should be successful

  @regression @backend
  Scenario: Invalid login
    Given user opens backend app
    When user enters invalid credentials
    Then error message should be shown

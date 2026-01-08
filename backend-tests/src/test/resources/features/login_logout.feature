@smoke @login
Feature: Backend Login Logout

  Scenario: Login and Logout API
    Given user sends login request
    When user sends logout request
    Then login logout should be successful

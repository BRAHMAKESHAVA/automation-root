package com.company.backend.steps;

import io.cucumber.java.en.*;

public class LoginSteps {

    @Given("user opens backend app")
    public void user_opens_backend_app() {
        System.out.println("Backend app opened");
    }

    @When("user enters valid credentials")
    public void user_enters_valid_credentials() {
        System.out.println("Valid credentials entered");
    }

    @When("user enters invalid credentials")
    public void user_enters_invalid_credentials() {
        System.out.println("Invalid credentials entered");
    }

    @Then("login should be successful")
    public void login_should_be_successful() {
        System.out.println("Login successful");
    }

    @Then("error message should be shown")
    public void error_message_should_be_shown() {
        System.out.println("Error message shown");
    }
}

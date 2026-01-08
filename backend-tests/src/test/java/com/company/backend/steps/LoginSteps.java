package com.company.backend.steps;

import com.company.backend.api.LoginApi;
import com.company.backend.utils.ConfigReader;
import io.cucumber.java.en.*;
import org.testng.Assert;

public class LoginSteps {

    LoginApi api = new LoginApi();

    @Given("user sends login request")
    public void user_sends_login_request() {
        boolean result = api.login(
                ConfigReader.get("username"),
                ConfigReader.get("password")
        );
        Assert.assertTrue(result);
    }

    @When("user sends logout request")
    public void user_sends_logout_request() {
        Assert.assertTrue(api.logout());
    }

    @Then("login logout should be successful")
    public void login_logout_should_be_successful() {
        Assert.assertTrue(true);
    }
}

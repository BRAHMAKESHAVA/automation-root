package com.company.backend.hooks;

import io.cucumber.java.Before;
import io.cucumber.java.After;

public class Hooks {

    @Before
    public void beforeScenario() {
        System.out.println("Starting Scenario");
    }

    @After
    public void afterScenario() {
        System.out.println("Ending Scenario");
    }
}

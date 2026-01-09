package com.company.backend.runners;

import io.cucumber.testng.AbstractTestNGCucumberTests;
import io.cucumber.testng.CucumberOptions;

@CucumberOptions(
        features = "src/test/resources/features",
        glue = {
                "com.company.backend.steps",
                "com.company.backend.hooks"
        },
        plugin = {"pretty"}
)
public class TestRunner extends AbstractTestNGCucumberTests {
}

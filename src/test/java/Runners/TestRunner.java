package Runners;

import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(features = "src/test/java/Features", 
	glue = { "Steps","com.qa.util"}, 
	tags = "@ReadExcel",
	plugin = { "pretty", "html:test-output", "json:target/cucumber.json",
			"com.aventstack.extentreports.cucumber.adapter.ExtentCucumberAdapter:"}, 	
	dryRun = false, 
	monochrome = true
	)
public class TestRunner {

}

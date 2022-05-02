package Steps;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;
import qa.com.factory.DriverFactory;

public class Steps {

	@Given("I open google page")
	public void i_open_google_page() {
		DriverFactory.getDriver().get("https://www.google.com/");
	}

	@When("I check for the google page title")
	public void i_check_for_the_google_page_title() {
		Assert.assertEquals("Google", 	DriverFactory.getDriver().getTitle());
	}

	@Given("I open bing page")
	public void i_open_bing_page() {
		DriverFactory.getDriver().get("https://www.bing.com/");
	}

	@When("I check for the bing page title")
	public void i_check_for_the_bing_page_title() {
		Assert.assertEquals("Bing",	DriverFactory.getDriver().getTitle());
	}

	@Then("^I search the \"([^\"]*)\" in google step$")
	public void i_search_the_keyword_in_google_step(String keyword) throws InterruptedException {
		DriverFactory.getDriver().findElement(By.name("q")).sendKeys(keyword);
		DriverFactory.getDriver().findElement(By.name("q")).submit();
		Thread.sleep(1000);
		Assert.assertEquals("My Title", 	DriverFactory.getDriver().getTitle());
	}
	
	@Then("^I search the \"([^\"]*)\" in bing step$")
	public void i_search_the_keyword_in_bing_step(String keyword) throws InterruptedException {
		DriverFactory.getDriver().findElement(By.name("q")).sendKeys(keyword);
		DriverFactory.getDriver().findElement(By.name("q")).submit();
		Thread.sleep(1000);
	}
	
	@Given("I skipping this step")
	public void i_skipping_this_step() {
		System.out.println("SKIP");
	}

}

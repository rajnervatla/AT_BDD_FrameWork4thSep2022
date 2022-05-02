package Steps;

import com.qa.pages.Login_page;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import qa.com.factory.DriverFactory;

public class StepDef_Login {
	
	Login_page lp=new Login_page(DriverFactory.getDriver());
	
	@Given("^User is Login page$")
    public void user_is_login_page() throws Throwable {
     System.out.println("HI...");
    }

    @When("^user clicks on login button$")
    public void user_clicks_on_login_button() throws Throwable {
        lp.clickonLogin();
    }

    @Then("^user enters the (.+)and (.+)$")
    public void user_enters_the_and(String username, String password) throws Throwable {
    	 lp.creds(username, password);
    }

    @Then("^user navigate to the home page$")
    public void user_navigate_to_the_home_page() throws Throwable {
      System.out.println("Already.");
    }

}

package Steps;

import java.util.List;
import java.util.Map;

import com.qa.pages.RegistrationPage;
import com.qa.util.ExcelReader;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import qa.com.factory.DriverFactory;

public class StepDef_RegistrationExcel {

	RegistrationPage rp=new RegistrationPage(DriverFactory.getDriver());

	@Given("^user navigates to Registration page$")
	public void user_navigates_to_registration_page() throws Throwable {
		System.out.println("On Registration page ");

	}

	@When("^user fills the form from given sheetname \"([^\"]*)\" and rownumber (.+)$")
	public void user_fills_the_form_from_given_sheetname_something_and_rownumber(String sheetname, int rownumber)
			throws Throwable {
		ExcelReader reader = new ExcelReader();
		List<Map<String, String>> testData = reader.getData("C:\\Users\\rajne\\EcommerceCucumberBDD\\src\\test\\resources\\DataSheet.xlsx",
				sheetname);

		String firstname1 = testData.get(rownumber).get("FirstName");
		String lastname1 = testData.get(rownumber).get("LastName");
		String address1 = testData.get(rownumber).get("Address");

		rp.fillContactUsForm(firstname1, lastname1, address1);

	}

	@Then("^it shows a successful message \"([^\"]*)\"$")
	public void it_shows_a_successful_message_something(String strArg1) throws Throwable {

		System.out.println("Successful message");
	}

	@And("^user clicks on submit button$")
	public void user_clicks_on_submit_button() throws Throwable {

		System.out.println("Successfull message");
	}

}

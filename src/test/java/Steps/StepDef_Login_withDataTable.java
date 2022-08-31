package Steps;

import java.util.List;

import com.qa.pages.Login_DataTable;

import io.cucumber.datatable.DataTable;
import io.cucumber.java.en.Then;

public class StepDef_Login_withDataTable {
	Login_DataTable ldata;

	
	
	    @Then("^user enters the credentials using data table$")
	    public void user_enters_the_credentials_using_data_table(DataTable datatable) throws Throwable {
	       System.out.println("Enter the user name and password through the datatable ");
	       List<List<String>> data=datatable.cells();
	       String un=data.get(0).get(0);
	       String ps=data.get(0).get(1);
	       
	       
	       ldata.creds(un, ps);
	       
	       
	    }

	  
}

package com.qa.pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class RegistrationPage {

	private WebDriver driver;

	private By fname = By.xpath("//*[@ng-model='FirstName']");
	private By lname = By.xpath("//*[@ng-model='LastName']");

	private By addrs = By.xpath("//*[@ng-model='Adress']");

	public RegistrationPage(WebDriver driver) {
		this.driver = driver;
	}

	public void fillContactUsForm(String fnamee, String lastname, String adddse) {

		driver.findElement(fname).sendKeys(fnamee);
		driver.findElement(lname).sendKeys(lastname);
		driver.findElement(addrs).sendKeys(adddse);
	}

}

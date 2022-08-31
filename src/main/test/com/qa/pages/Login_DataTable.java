package com.qa.pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class Login_DataTable {

	private WebDriver driver;
	public Login_DataTable(WebDriver driver) {
    driver=driver;
	}
	private By emailId = By.xpath("//*[@name='username']");
	private By password = By.xpath("//*[@name='pw']");
	private By signInButton = By.xpath("//*[@name='Login']");
    
    
	public void creds(String user, String pass) {

		driver.findElement(emailId).sendKeys(user);
		driver.findElement(password).sendKeys(pass);

	}

	public void clickonLogin() {
		driver.findElement(signInButton).click();
		
	}

	public void verifytheHomepage() {
		String title = driver.getTitle();
		System.out.println(title);
	}

}

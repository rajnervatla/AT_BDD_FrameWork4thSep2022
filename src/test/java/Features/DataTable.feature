@datatable
Feature: Login Test Functioality using the data Table 
Scenario: Verifying the login page with diffrent set of data using data table
Given User is Login page
Then user enters the credentials using data table
| admin| admin123|
When user clicks on login button
Then user navigate to the home page

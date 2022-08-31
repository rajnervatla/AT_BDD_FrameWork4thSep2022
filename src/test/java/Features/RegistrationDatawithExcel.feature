@ReadExcel
Feature: Registration  Feature

Scenario Outline: Registering the user scenario with different set of data
Given user navigates to Registration page
When user fills the form from given sheetname "<SheetName>" and rownumber <RowNumber>
And user clicks on submit button
Then it shows a successful message "Your message has been successfully sent to our team."

Examples:
|SheetName|RowNumber|
|data|0|
|data|1|
|data|2|
|data|3|

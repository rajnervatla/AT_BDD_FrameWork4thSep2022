$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/Features/Test.feature");
formatter.feature({
  "name": "Login Test Functioality",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@test"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Verifying the login page with diffrent set of data",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User is Login page",
  "keyword": "Given "
});
formatter.step({
  "name": "user enters the \u003cusername\u003eand \u003cpassword\u003e",
  "keyword": "Then "
});
formatter.step({
  "name": "user clicks on login button",
  "keyword": "When "
});
formatter.step({
  "name": "user navigate to the home page",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "raj",
        "1234"
      ]
    },
    {
      "cells": [
        "Test",
        "3434"
      ]
    },
    {
      "cells": [
        "test2",
        "222"
      ]
    },
    {
      "cells": [
        "test3",
        "777"
      ]
    },
    {
      "cells": [
        "remotepush",
        "333"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verifying the login page with diffrent set of data",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@test"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is Login page",
  "keyword": "Given "
});
formatter.match({
  "location": "Steps.StepDef_Login.user_is_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters the rajand 1234",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.StepDef_Login.user_enters_the_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on login button",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.StepDef_Login.user_clicks_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigate to the home page",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.StepDef_Login.user_navigate_to_the_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verifying the login page with diffrent set of data",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@test"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is Login page",
  "keyword": "Given "
});
formatter.match({
  "location": "Steps.StepDef_Login.user_is_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters the Testand 3434",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.StepDef_Login.user_enters_the_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on login button",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.StepDef_Login.user_clicks_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigate to the home page",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.StepDef_Login.user_navigate_to_the_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verifying the login page with diffrent set of data",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@test"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is Login page",
  "keyword": "Given "
});
formatter.match({
  "location": "Steps.StepDef_Login.user_is_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters the test2and 222",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.StepDef_Login.user_enters_the_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on login button",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.StepDef_Login.user_clicks_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigate to the home page",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.StepDef_Login.user_navigate_to_the_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verifying the login page with diffrent set of data",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@test"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is Login page",
  "keyword": "Given "
});
formatter.match({
  "location": "Steps.StepDef_Login.user_is_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters the test3and 777",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.StepDef_Login.user_enters_the_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on login button",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.StepDef_Login.user_clicks_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigate to the home page",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.StepDef_Login.user_navigate_to_the_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verifying the login page with diffrent set of data",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@test"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is Login page",
  "keyword": "Given "
});
formatter.match({
  "location": "Steps.StepDef_Login.user_is_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters the remotepushand 333",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.StepDef_Login.user_enters_the_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on login button",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.StepDef_Login.user_clicks_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigate to the home page",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.StepDef_Login.user_navigate_to_the_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});
Feature: Validating Add place API's

@AddPlace @all
Scenario Outline: Verify if place is being successfully added using AddPlace Api or not
Given Add place payload with "<Name>" "<Address>" "<Language>"
When user calls "AddPlaceAPI" with "POST" http request
Then the API call is success with status code 200
And "status" in the response is "OK"
And "scope" in the response is "APP"
And verify Place_Id created maps to "<Name>" using "GetPlaceAPI"

Examples: 
| Name   | Address          | Language |
|Sheetal | Himachal Pradesh | Hindi    |
|Mohit   | Punjab           | Punjabi  |

@DeletePlace @all
Scenario: Verify if Delete functionallity is working
Given Delete place payload
When user calls "DeletePlaceAPI" with "POST" http request
Then the API call is success with status code 200
And "status" in the response is "OK"
$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Place_validation.feature");
formatter.feature({
  "line": 1,
  "name": "Validating Add place API\u0027s",
  "description": "",
  "id": "validating-add-place-api\u0027s",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Verify if place is being successfully added using AddPlace Api or not",
  "description": "",
  "id": "validating-add-place-api\u0027s;verify-if-place-is-being-successfully-added-using-addplace-api-or-not",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@AddPlace"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Add place payload with \"\u003cName\u003e\" \"\u003cAddress\u003e\" \"\u003cLanguage\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user calls \"AddPlaceAPI\" with \"POST\" http request",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "the API call is success with status code 200",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "\"status\" in the response is \"OK\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "\"scope\" in the response is \"APP\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "verify Place_Id created maps to \"\u003cName\u003e\" using \"GetPlaceAPI\"",
  "keyword": "And "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "validating-add-place-api\u0027s;verify-if-place-is-being-successfully-added-using-addplace-api-or-not;",
  "rows": [
    {
      "cells": [
        "Name",
        "Address",
        "Language"
      ],
      "line": 13,
      "id": "validating-add-place-api\u0027s;verify-if-place-is-being-successfully-added-using-addplace-api-or-not;;1"
    },
    {
      "cells": [
        "Sheetal",
        "Himachal Pradesh",
        "Hindi"
      ],
      "line": 14,
      "id": "validating-add-place-api\u0027s;verify-if-place-is-being-successfully-added-using-addplace-api-or-not;;2"
    },
    {
      "cells": [
        "Mohit",
        "Punjab",
        "Punjabi"
      ],
      "line": 15,
      "id": "validating-add-place-api\u0027s;verify-if-place-is-being-successfully-added-using-addplace-api-or-not;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 14,
  "name": "Verify if place is being successfully added using AddPlace Api or not",
  "description": "",
  "id": "validating-add-place-api\u0027s;verify-if-place-is-being-successfully-added-using-addplace-api-or-not;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@AddPlace"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Add place payload with \"Sheetal\" \"Himachal Pradesh\" \"Hindi\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user calls \"AddPlaceAPI\" with \"POST\" http request",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "the API call is success with status code 200",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "\"status\" in the response is \"OK\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "\"scope\" in the response is \"APP\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "verify Place_Id created maps to \"Sheetal\" using \"GetPlaceAPI\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Sheetal",
      "offset": 24
    },
    {
      "val": "Himachal Pradesh",
      "offset": 34
    },
    {
      "val": "Hindi",
      "offset": 53
    }
  ],
  "location": "Step_Definationss.add_place_payload_with(String,String,String)"
});
formatter.result({
  "duration": 5065385200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "AddPlaceAPI",
      "offset": 12
    },
    {
      "val": "POST",
      "offset": 31
    }
  ],
  "location": "Step_Definationss.user_calls_with_post_http_request(String,String)"
});
formatter.result({
  "duration": 4756974800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 41
    }
  ],
  "location": "Step_Definationss.the_API_call_is_success_with_status_code(int)"
});
formatter.result({
  "duration": 3515000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "status",
      "offset": 1
    },
    {
      "val": "OK",
      "offset": 29
    }
  ],
  "location": "Step_Definationss.in_the_response_is(String,String)"
});
formatter.result({
  "duration": 1565914500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "scope",
      "offset": 1
    },
    {
      "val": "APP",
      "offset": 28
    }
  ],
  "location": "Step_Definationss.in_the_response_is(String,String)"
});
formatter.result({
  "duration": 24362100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sheetal",
      "offset": 33
    },
    {
      "val": "GetPlaceAPI",
      "offset": 49
    }
  ],
  "location": "Step_Definationss.verify_Place_Id_created_maps_to_using(String,String)"
});
fformatter.result({
  "duration": 3176891400,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Verify if place is being successfully added using AddPlace Api or not",
  "description": "",
  "id": "validating-add-place-api\u0027s;verify-if-place-is-being-successfully-added-using-addplace-api-or-not;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@AddPlace"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Add place payload with \"Mohit\" \"Punjab\" \"Punjabi\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user calls \"AddPlaceAPI\" with \"POST\" http request",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "the API call is success with status code 200",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "\"status\" in the response is \"OK\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "\"scope\" in the response is \"APP\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "verify Place_Id created maps to \"Mohit\" using \"GetPlaceAPI\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Mohit",
      "offset": 24
    },
    {
      "val": "Punjab",
      "offset": 32
    },
    {
      "val": "Punjabi",
      "offset": 41
    }
  ],
  "location": "Step_Definationss.add_place_payload_with(String,String,String)"
});
formatter.result({
  "duration": 6483800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "AddPlaceAPI",
      "offset": 12
    },
    {
      "val": "POST",
      "offset": 31
    }
  ],
  "location": "Step_Definationss.user_calls_with_post_http_request(String,String)"
});fformatter.result({
  "duration": 517231600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 41
    }
  ],
  "location": "Step_Definationss.the_API_call_is_success_with_status_code(int)"
});
formatter.result({
  "duration": 212900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "status",
      "offset": 1
    },
    {
      "val": "OK",
      "offset": 29
    }
  ],
  "location": "Step_Definationss.in_the_response_is(String,String)"
});
formatter.result({
  "duration": 21315800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "scope",
      "offset": 1
    },
    {
      "val": "APP",
      "offset": 28
    }
  ],
  "location": "Step_Definationss.in_the_response_is(String,String)"
});
formatter.result({
  "duration": 14147700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mohit",
      "offset": 33
    },
    {
      "val": "GetPlaceAPI",
      "offset": 47
    }
  ],
  "location": "Step_Definationss.verify_Place_Id_created_maps_to_using(String,String)"
});fformatter.result({
  "duration": 3115121700,
  "status": "passed"
});
formatter.before({
  "duration": 108800,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Verify if Delete functionallity is working",
  "description": "",
  "id": "validating-add-place-api\u0027s;verify-if-delete-functionallity-is-working",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 17,
      "name": "@DeletePlace"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "Delete place payload",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "user calls \"DeletePlaceAPI\" with \"POST\" http request",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "the API call is success with status code 200",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "\"status\" in the response is \"OK\"",
  "keyword": "And "
});
formatter.match({
  "location": "Step_Definationss.delete_place_payload()"
});
formatter.result({
  "duration": 1462400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "DeletePlaceAPI",
      "offset": 12
    },
    {
      "val": "POST",
      "offset": 34
    }
  ],
  "location": "Step_Definationss.user_calls_with_post_http_request(String,String)"
});fformatter.result({
  "duration": 4480546400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 41
    }
  ],
  "location": "Step_Definationss.the_API_call_is_success_with_status_code(int)"
});
formatter.result({
  "duration": 195200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "status",
      "offset": 1
    },
    {
      "val": "OK",
      "offset": 29
    }
  ],
  "location": "Step_Definationss.in_the_response_is(String,String)"
});
formatter.result({
  "duration": 14451300,
  "status": "passed"
});
});
package Step_Defination;

import static io.restassured.RestAssured.given;
import static org.junit.Assert.assertEquals;

import java.util.ArrayList;
import java.util.List;

import org.openqa.selenium.json.Json;

import Resources.Api_Resources;
import Resources.TestDataBuild;
import Resources.Utils;
import pojo.Get_Data;
import pojo.Location_data;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.restassured.builder.RequestSpecBuilder;
import io.restassured.builder.ResponseSpecBuilder;
import io.restassured.http.ContentType;
import io.restassured.path.json.JsonPath;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;
import io.restassured.specification.ResponseSpecification;
//Juinit assertion
import static org.junit.Assert.*;
//junit assertion//
import static org.junit.Assert.*;
public class Step_Definationss extends Utils {

	JsonPath js;
	static ResponseSpecification req1;
    static	RequestSpecification Res;
	static Response response;
	static String Place_Id;

	TestDataBuild data = new TestDataBuild();
	
	@Given("^Add place payload with \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\"$")
	public void add_place_payload_with(String Name, String Address, String Language) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		req1 =new ResponseSpecBuilder().expectStatusCode(200).expectContentType(ContentType.JSON).build();
		Res=given().spec(requestSpecification())
				.body(data.addPlacePayload(Name,Address,Language));
		
	}

	@When("^user calls \\\"([^\\\"]*)\\\" with \\\"([^\\\"]*)\\\" http request$")
	public void user_calls_with_post_http_request(String resource, String http_method) throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		
		Api_Resources resources_api = Api_Resources.valueOf(resource);
		System.out.println(resources_api.get_Resource());
	
		
//		response=Res.when().post(resources_api.GetPlaceAPI)
//				.then().log().all().spec(req1).extract().response();
//		
		
		
		
		
		if(http_method.equalsIgnoreCase("POST"))
		{
			response=Res.when().post(resources_api.get_Resource()).then().log().all().spec(req1).extract().response();
		}
		
		else if(http_method.equalsIgnoreCase("GET"))
		{
			response=Res.when().get(resources_api.get_Resource()).then().log().all().spec(req1).extract().response();
		}
		
//		response=Res.when().post("/maps/api/place/add/json")
//				.then().log().all().spec(req1).extract().response();
//		
		
		String resp=response.asString();
		System.out.println(resp);
	}

	@Then("^the API call is success with status code (\\d+)$")
	public void the_API_call_is_success_with_status_code(int statuscode) throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		assertEquals(response.getStatusCode(),statuscode);	
		System.out.println(response.getStatusCode());
	}

	@Then("^\"([^\"]*)\" in the response is \"([^\"]*)\"$")
	public void in_the_response_is(String KeyValue, String ExpectedValue) throws Throwable {
		// Write code here that turns the phrase above into concrete actions
//		String resp=response.asString();
//		 js = new JsonPath(resp);
//		System.out.println(js.get(KeyValue));
//		assertEquals(js.get(KeyValue).toString(),ExpectedValue);
		
		assertEquals(getJsonPath(response,KeyValue),ExpectedValue);
//		
//		 Place_Id= js.getString("place_id");
//		System.out.println("Place id is "+Place_Id);
		

	}
	
	@Then("^verify Place_Id created maps to \"([^\"]*)\" using \"([^\"]*)\"$")
	public void verify_Place_Id_created_maps_to_using(String name, String resource) throws Throwable {
	    // get API call
		Place_Id= getJsonPath(response,"place_id"); 
		
		
		System.out.println("Place id is "+Place_Id);
		Res=given().spec(requestSpecification()).queryParam("place_id", Place_Id);
		
		user_calls_with_post_http_request(resource,"Get");
		
		String actualname= getJsonPath(response,"name"); 
		System.out.println("name is "+actualname);
		
		assertEquals(name,actualname);
		System.out.println("sheetal jaswal");
		
	}

	@Given("^Delete place payload$")
	public void delete_place_payload() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	
		Res=given().spec(requestSpecification()).body(data.DeletePlacePayload(Place_Id));
	   
	}



}

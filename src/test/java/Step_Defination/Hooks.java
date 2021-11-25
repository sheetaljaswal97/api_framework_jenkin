package Step_Defination;

import cucumber.api.java.Before;

public class Hooks {

	@Before("@DeletePlace")
	public void Before_scenario() throws Throwable
	{
	//write a code to give place id//
		//execute this code when [lace id is null//
		Step_Definationss obj = new Step_Definationss();
		
		if(Step_Definationss.Place_Id==null)
		{
		obj.add_place_payload_with("sheety", "mohali", "french");
		obj.user_calls_with_post_http_request("AddPlaceAPI", "GET");
		obj.verify_Place_Id_created_maps_to_using("sheety", "GetPlaceAPI");
		}
	}

}
